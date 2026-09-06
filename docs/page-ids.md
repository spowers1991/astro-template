# Page IDs

Each page rendered through `BaseLayout` assigns a stable ID to the shared
`<main>` element using the `page-<route>` convention:

- `page-home`
- `page-movies`
- `page-example`
- `page-404`

The ID describes the page type rather than a dynamic URL, so every movie
detail route intentionally uses `page-movies`. Pages pass their IDs through
`BaseLayout`; layouts that do not pass one use the first URL segment as a
fallback (or `page-home` for `/`).
