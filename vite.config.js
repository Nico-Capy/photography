import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import image from '@vitejs/plugin-image'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3020,
  },
  plugins: [vue(),
    image()],
})