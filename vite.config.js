import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // define: {
  //   'process.env.REACT_APP_NASA_ENDPOINT': JSON.stringify(process.env.REACT_APP_NASA_ENDPOINT),
  //   'process.env.REACT_APP_NASA_API_KEY': JSON.stringify(process.env.REACT_APP_NASA_API_KEY),
  // },

  server: {
    port: 3000,
  },
  plugins: [react()]
})

