import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/SPA---Proyecto-Vilumin/' : '/',
  plugins: [tailwindcss(),vue()],
  optimizeDeps: {
    include: ['swiper']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Aquí se define '@' como alias de 'src'
    }
  }
})
