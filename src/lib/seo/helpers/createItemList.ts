import type { ItemListSchema } from "@/lib/seo/types/jsonLd";

export function createItemList<TItem, TSchema>(
  items: TItem[],
  mapItem: (item: TItem, index: number) => TSchema,
): ItemListSchema<TSchema> {
  return {
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      item: mapItem(item, index),
    })),
  };
}

