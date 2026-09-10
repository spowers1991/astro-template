interface ResolveCanonicalUrlProps {
  path?: string;
  site?: URL;
  url: URL;
}

export function resolveCanonicalUrl({ path, site, url }: ResolveCanonicalUrlProps): string {
  const resolvedPath = path ?? url.pathname;

  if (!site) {
    return new URL(resolvedPath, url.origin).toString();
  }

  if (resolvedPath.startsWith("/")) {
    return new URL(resolvedPath, site.origin).toString();
  }

  return new URL(resolvedPath, new URL("./", site)).toString();
}
