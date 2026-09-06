# Performance and asset optimisation

This project uses Astro's built-in production pipeline rather than adding
optimisation integrations:

- `compressHTML: true` compresses generated HTML.
- Vite's production build minifies CSS and JavaScript with its built-in
  minifiers.
- Astro emits imported assets through its normal build pipeline. Static files
  in `public/` are copied unchanged because they are already served as-is.
- Movie posters use the Sanity image CDN through `safeImageUrl()`. Poster URLs
  request a 600px-wide, quality-80 response with automatic format negotiation
  instead of downloading the original asset.
- The only client-side widget is the counter on the integration example page.
  It uses `client:visible` so its JavaScript is deferred until the widget can
  be seen. The movie pages contain no client directives and therefore produce
  no page JavaScript.

No third-party scripts are currently present, so Partytown would add
complexity without moving work off the main thread. `astro-compress` would
duplicate Astro/Vite's native HTML, CSS, and JavaScript compression, and
`astro-critical-css` is not justified without a measured above-the-fold
benefit. Neither package is installed.

Run `npm run build` to inspect the production output in `dist/`.
