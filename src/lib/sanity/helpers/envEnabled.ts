/**
 * Checks whether the Sanity environment variables required to talk to the
 * Sanity API are configured.
 *
 * Pages that fetch Sanity-backed data should use this guard to gracefully
 * skip static path/data generation when Sanity is not configured, instead of
 * duplicating the same inline check across multiple files.
 *
 * @returns `true` if Sanity is configured and enabled, `false` otherwise.
 */
export function envEnabled(): boolean {
  return Boolean(
    import.meta.env.PUBLIC_SANITY_PROJECT_ID &&
      import.meta.env.PUBLIC_SANITY_DATASET
  );
}
