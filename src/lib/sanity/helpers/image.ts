// /sanity/lib/image.ts
import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "@/lib/sanity/api/astroClients";

const builder = createImageUrlBuilder(sanityClient);

type SanityImageSource = Parameters<typeof builder.image>[0];

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}

export function safeImageUrl(source: SanityImageSource | null | undefined) {
  if (!source) return null;

  try {
    return builder
      .image(source)
      .width(600)
      .quality(80)
      .auto("format")
      .url();
  } catch {
    return null;
  }
}
