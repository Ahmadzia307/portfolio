import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base` must match how the site is served:
//  - GitHub Pages project site:  https://USER.github.io/REPO/  ->  base = '/REPO/'
//  - Custom domain or user site (USER.github.io):              ->  base = '/'
//  - Vercel / Netlify:                                         ->  base = '/'
// Set it via VITE_BASE in the build environment; defaults to '/'.
// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
})
