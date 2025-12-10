// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'

// Auth disabled - no Twitch credentials configured
// import auth from 'auth-astro';

export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    inlineStylesheets: 'always',
  },

  adapter: vercel(),

  // Auth removed from integrations
  integrations: [sitemap()],

  site: 'https://www.infolavelada.com/',
})