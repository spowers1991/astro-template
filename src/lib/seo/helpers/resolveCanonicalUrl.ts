interface ResolveCanonicalUrlProps {
  path?: string;
  site?: URL;
  url: URL;
}

export function resolveCanonicalUrl({ path, site, url }: ResolveCanonicalUrlProps): string {
  const baseUrl = site ? new URL("./", site) : new URL(url.origin);
  const resolvedPath = site ? (path ?? url.pathname).replace(/^\/+/u, "") : path ?? url.pathname;
  return new URL(resolvedPath, baseUrl).toString();
}
