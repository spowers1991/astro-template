# Page IDs

Each page rendered through `BaseLayout` assigns a stable ID to the shared
`<main>` element using the `page-<route>` convention:

- `page-home`
- `page-movies`
- `page-example`
- `page-404`

The ID describes the page type rather than a dynamic URL, so every movie
detail route intentionally uses `page-movies`. Keeping the assignment in each
page's `BaseLayout` props avoids deriving IDs from URLs and provides a single
fallback location if a page later needs a route-specific identifier.
