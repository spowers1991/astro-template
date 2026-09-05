export function envEnabled(): boolean {
  return Boolean(
    import.meta.env.PUBLIC_SANITY_PROJECT_ID &&
    import.meta.env.PUBLIC_SANITY_DATASET
  );
}
