// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * @param {string | undefined} value
 * @returns {string | undefined}
 */
function resolveSiteUrl(value) {
  if (!value) {
    return undefined;
  }

  try {
    const resolvedUrl = new URL(/^https?:\/\//u.test(value) ? value : `https://${value}`);
    if (resolvedUrl.protocol !== 'https:') {
      return undefined;
    }

    resolvedUrl.hash = '';
    resolvedUrl.search = '';
    resolvedUrl.pathname = resolvedUrl.pathname === '/'
      ? '/'
      : `${resolvedUrl.pathname.replace(/\/+$/u, '')}/`;
    return resolvedUrl.toString();
  } catch {
    return undefined;
  }
}

// https://astro.build/config
const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
const site = resolveSiteUrl(env.SITE_URL)
  || resolveSiteUrl(env.PUBLIC_SITE_URL)
  || resolveSiteUrl(env.VERCEL_PROJECT_PRODUCTION_URL);

export default defineConfig({
  compressHTML: true,
  ...(site ? { site } : {}),
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
    ...(site ? [sitemap()] : []),
  ]
});
