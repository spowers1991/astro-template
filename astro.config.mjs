// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';

import sanity from '@sanity/astro';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
const site = env.SITE_URL || env.PUBLIC_SITE_URL;

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
    ...(env.PUBLIC_SANITY_PROJECT_ID && env.PUBLIC_SANITY_DATASET
      ? [sanity({
          projectId: env.PUBLIC_SANITY_PROJECT_ID,
          dataset: env.PUBLIC_SANITY_DATASET,
          apiVersion: "2024-01-01",
          useCdn: false,
        })]
      : []),
    react(),
    mdx(),
    sitemap(),
  ]
});
