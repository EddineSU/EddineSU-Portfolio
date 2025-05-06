import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/EddineSU-Portfolio/',  // correspond au nom exact du dépôt
  plugins: [react()],
})
