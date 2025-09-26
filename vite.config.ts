import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
  server: {
    proxy: {
      // Redireciona requisições de /api para o seu backend
      '/api': {
        target: 'http://localhost:8080', // O endereço do seu backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
