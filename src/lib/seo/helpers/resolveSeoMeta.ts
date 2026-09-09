import type { OpenGraphMeta, SeoRobots, TwitterMeta } from "@/lib/seo/types/seo";

interface ResolveSeoMetaProps {
  robots?: SeoRobots;
  openGraph?: OpenGraphMeta;
  twitter?: TwitterMeta;
}

export function resolveRobotsContent(robots?: SeoRobots): string {
  return [
    robots?.index === false ? "noindex" : "index",
    robots?.follow === false ? "nofollow" : "follow",
  ].join(",");
}

export function resolveTwitterCard({ openGraph, twitter }: ResolveSeoMetaProps): NonNullable<TwitterMeta["card"]> {
  return twitter?.card ?? (openGraph?.image || twitter?.image ? "summary_large_image" : "summary");
}

export function resolveSocialImage({ openGraph, twitter }: ResolveSeoMetaProps): string | undefined {
  return openGraph?.image ?? twitter?.image;
}