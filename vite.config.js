import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { imagetools } from "vite-imagetools";
import Fonts from "unplugin-fonts/vite";

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
});
