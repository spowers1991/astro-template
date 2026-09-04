// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';

import sanity from '@sanity/astro';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

export default defineConfig({
  vite: {
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
  ]
});
