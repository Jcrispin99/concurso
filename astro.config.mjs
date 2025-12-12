// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import node from '@astrojs/node'
import sitemap from '@astrojs/sitemap'

// Auth disabled - no Twitch credentials configured
// import auth from 'auth-astro';

export default defineConfig({
  output: 'server',

  server: {
    host: '0.0.0.0',
    port: 4321,
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['miss.kdoshstore.com'],
    },
  },

  build: {
    inlineStylesheets: 'always',
  },

  adapter: node({
    mode: 'standalone',
  }),

  // Auth removed from integrations
  integrations: [sitemap()],

  site: 'https://www.miss.kdoshstore.com/',
})
