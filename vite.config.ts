import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [svelte()],
  // Relative assets work on both username.github.io and /repository/ Pages URLs.
  base: './',
})
