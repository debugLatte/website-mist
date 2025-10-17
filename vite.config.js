import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // ADD THE 'base' PROPERTY HERE
  plugins: [react()],
  // ... rest of the file if any
})