import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/EddineSU-Portfolio/',  // <-- Ajout de la base pour GitHub Pages
  plugins: [react()],
  esbuild: {
    target: 'esnext', // Corrige l'erreur de top-level await
  },
})
