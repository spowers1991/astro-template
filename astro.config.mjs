// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
const vercelUrl = env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_URL;
const site = env.SITE_URL || env.PUBLIC_SITE_URL || (vercelUrl ? `https://${vercelUrl}` : 'https://astro-template.vercel.app');

export default defineConfig({
  compressHTML: true,
  site,
  vite: {
    build: {
      cssMinify: true,
      minify: true,
    },
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
  integrations: [
    react(),
    mdx(),
    sitemap(),
  ]
});
