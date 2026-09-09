interface ResolveCanonicalUrlProps {
  path?: string;
  site?: URL;
  url: URL;
}

export function resolveCanonicalUrl({ path, site, url }: ResolveCanonicalUrlProps): string {
  const baseUrl = site ?? url.origin;
  return new URL(path ?? url.pathname, baseUrl).toString();
}
