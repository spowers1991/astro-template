interface ResolvePageIdProps {
  astro: any;
  pageId?: string;
}

export function resolvePageId({ astro, pageId }: ResolvePageIdProps) {

  const routeSegment = astro.url.pathname.split("/").filter(Boolean)[0];
  const resolvedPageId = pageId ?? `page-${routeSegment || "home"}`;

  return resolvedPageId;
}