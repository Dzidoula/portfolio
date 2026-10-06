import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.VERCEL ? '/' : '/portfolio/',
  plugins: [react(), tailwindcss()],
})
