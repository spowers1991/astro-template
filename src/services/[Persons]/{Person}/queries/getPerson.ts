// lib/sanity/queries/getMovie.ts
import { sanityClient } from "@/lib/sanity/api/astroClients";
import { cache } from "react";
import type { Person as PersonType } from "@/services/[Persons]/{Person}/types/Person";

export const getPerson = cache(async (slug: string): Promise<PersonType | null> => {
  return sanityClient.fetch(
    `*[_type == "person" && slug.current == $slug][0]`,
    { slug }
  );
});
