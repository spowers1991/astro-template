export interface WebSiteSchema {
  "@type": "WebSite";
  name: string;
  description?: string;
  url?: string;
}

export interface WebPageSchema {
  "@type": "WebPage";
  name: string;
  description?: string;
  url?: string;
}

export interface ArticleSchema {
  "@type": "Article";
  headline: string;
  description?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  image?: string | string[];
  mainEntityOfPage?: string;
}

export interface MovieSchema {
  "@type": "Movie";
  name: string;
  description?: string;
  image?: string | string[];
  datePublished?: string;
  url?: string;
}

export type JsonLdSchema = WebSiteSchema | WebPageSchema | ArticleSchema | MovieSchema;
