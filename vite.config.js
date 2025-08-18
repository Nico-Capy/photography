import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { imagetools } from "vite-imagetools";
import Fonts from "unplugin-fonts/vite";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer"; // Using rollup-plugin-visualizer
import path from "path";

// Polyfill Node built-ins only if needed
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

export default defineConfig({
  plugins: [
    vue(),
    imagetools(), // Image processing
    Fonts({
      google: {
        families: [{ name: "Roboto", styles: "wght@400;700" }],
      },
    }),
    compression({ algorithm: "gzip" }),
    compression({ algorithm: "brotliCompress" }),
    visualizer({
      template: "treemap", // or "sunburst"
      filename: "./dist/bundle-analysis.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  server: {
    port: 3020,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: { global: "globalThis" },
      plugins: [
        NodeGlobalsPolyfillPlugin({ buffer: true }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      crypto: "crypto-browserify",
    },
  },
  build: {
    target: "esnext",
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
