import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import vue from '@vitejs/plugin-vue'
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),vue()],
  optimizeDeps: {
    include: ['swiper']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Aquí se define '@' como alias de 'src'
    }
  }
})
