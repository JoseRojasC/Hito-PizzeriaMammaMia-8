import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Cambia esto por la URL de tu backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
