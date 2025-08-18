import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { imagetools } from "vite-imagetools";
import Fonts from "unplugin-fonts/vite";

// Polyfill Node built-ins for Vite
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

export default defineConfig({
  plugins: [
    vue(),
    imagetools(),
    Fonts({
      google: {
        families: [
          {
            name: "Roboto",
            styles: "wght@400;700",
          },
        ],
      },
    }),
  ],
  server: {
    port: 3020,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({ buffer: true }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
  resolve: {
    alias: {
      crypto: "crypto-browserify", // Polyfill Node crypto
    },
  },
});
