import type { JsonLdSchema } from "@/lib/seo/types/jsonLd";

interface ResolveJsonLdSchemaProps {
  schema: JsonLdSchema;
  canonicalUrl: string;
  siteUrl: string;
}

export function resolveJsonLdSchema({ schema, canonicalUrl, siteUrl }: ResolveJsonLdSchemaProps) {
  if (schema["@type"] === "WebSite") {
    return { "@context": "https://schema.org", ...schema, url: schema.url ?? siteUrl };
  }

  if (schema["@type"] === "WebPage" || schema["@type"] === "Movie") {
    return { "@context": "https://schema.org", ...schema, url: schema.url ?? canonicalUrl };
  }

  return {
    "@context": "https://schema.org",
    ...schema,
    mainEntityOfPage: schema.mainEntityOfPage ?? canonicalUrl,
  };
}