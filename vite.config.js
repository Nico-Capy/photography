// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { imagetools } from "vite-imagetools";
import Fonts from "unplugin-fonts/vite";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

/**
 * Toggle chunk splitting.
 *
 * Priority:
 *   1. Environment variable: NO_CHUNKS=true → disables manualChunks
 *   2. Fallback: local toggle below
 */
const localDisableManualChunks = false;
const disableManualChunks =
  process.env.NO_CHUNKS === "true" || localDisableManualChunks;

export default defineConfig({
  plugins: [
    vue(),

    // Image tools for on-demand processing
    imagetools(),

    // Google Fonts loader
    Fonts({
      google: {
        families: [{ name: "Roboto", styles: "wght@400;700" }],
      },
    }),

    // Compression
    compression({ algorithm: "gzip" }),
    compression({ algorithm: "brotliCompress" }),

    // Bundle visualizer
    visualizer({
      template: "treemap",
      filename: "./dist/bundle-analysis.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],

  server: {
    port: 3020,
  },

  // Suppression des plugins de polyfill obsolètes et vulnérables
  // Vite gère nativement la plupart des cas modernes
  optimizeDeps: {
    esbuildOptions: {
      define: { global: "globalThis" },
      // Plugins supprimés : NodeGlobalsPolyfillPlugin et NodeModulesPolyfillPlugin
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      // L'alias 'crypto: "crypto-browserify"' a été supprimé pour éviter la vulnérabilité
    },
  },

  build: {
    target: "esnext",
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: disableManualChunks
          ? undefined
          : (id) => {
              if (id.includes("node_modules")) {
                if (id.includes("gsap")) return "gsap";
                if (id.includes("vue-router")) return "vue-router";
                if (id.includes("vue-i18n")) return "vue-i18n";
                if (id.includes("@fortawesome")) return "icons";
                return "vendor";
              }
            },
      },
    },
  },
});
