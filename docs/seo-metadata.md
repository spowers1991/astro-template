# SEO, Metadata, and Discoverability

## Configuration

- Sitemap generation uses `@astrojs/sitemap`.
- Set `SITE_URL` (or `PUBLIC_SITE_URL`) for production builds so canonical URLs and sitemap links resolve correctly.

## Reusable metadata

- `src/components/seo/Seo.astro` sets page `<title>`, description, canonical URL, robots metadata, Open Graph, and Twitter/X tags.
- `BaseLayout` accepts:
  - `title` and `description` defaults for every page.
  - `seo` overrides for canonical paths, robots directives, and social metadata.

## Structured data

- `src/components/seo/JsonLd.astro` renders JSON-LD with `@context: https://schema.org`.
- Supported schemas:
  - `WebSite`
  - `WebPage`
  - `Article`
- `BaseLayout` accepts `jsonLd` as a single schema object or array.

## Robots

- `src/pages/robots.txt.ts` generates `robots.txt` at build time.
- `@astrojs/robots` is not required because this route provides static crawler rules and a sitemap reference.
