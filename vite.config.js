import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Hito-PizzeriaMammaMia-7/',  // Solo el nombre del repositorio
})
