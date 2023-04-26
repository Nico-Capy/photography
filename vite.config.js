import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import image from 'vite-image'

export default defineConfig({
  plugins: [
    vue(),
    image()
  ],
  server: {
    port: 3020
  }
})
