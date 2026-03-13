import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
      '/espresso.jpg': 'http://localhost:5000',
      '/latte.jpg': 'http://localhost:5000',
      '/cappuccino.jpg': 'http://localhost:5000',
      '/mocha.jpg': 'http://localhost:5000',
    }
  }
})
