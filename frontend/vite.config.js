import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows external access
    port: 5173,      // Your dev server port
    strictPort: true, // Prevents fallback to another port
    allowedHosts: [
      'helmbytes.linkpc.net', // Your domain
      'www.helmbytes.linkpc.net', // Your domain
      'localhost',            // Local development
    ],
  },
})
