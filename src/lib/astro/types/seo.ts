export interface SeoRobots {
  index?: boolean;
  follow?: boolean;
}

export interface OpenGraphMeta {
  type?: "website" | "article";
  image?: string;
}

export interface TwitterMeta {
  card?: "summary" | "summary_large_image";
  site?: string;
  creator?: string;
  image?: string;
}

export interface SeoMeta {
  title: string;
  description: string;
  canonicalPath?: string;
  robots?: SeoRobots;
  openGraph?: OpenGraphMeta;
  twitter?: TwitterMeta;
}
