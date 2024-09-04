import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Disable sourcemap hide code in browser
  build: {  
    sourcemap: false  
  }  
})

