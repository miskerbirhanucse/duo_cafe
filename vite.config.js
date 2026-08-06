import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
 plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/duo_cafe/', // <--- Add your repository name here!
})


