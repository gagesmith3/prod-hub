import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/prod-hub/', // Must match your repo name
  plugins: [react()],
})
