import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: false,
    }),
  ],
  build: {
    cssCodeSplit: true,
  },
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store'),
    },
  },
})
