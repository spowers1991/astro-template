// lib/sanity/queries/getMovies.ts
import { sanityClient } from "@/lib/sanity/api/astroClients";
import { cache } from "react";
import type { Person as PersonType } from "@/services/[Persons]/{Person}/types/Person";

export const getPersons = cache(async (): Promise<PersonType[]> => {
  return sanityClient.fetch(
    `*[_type == "person"] | order(releaseDate desc)`
  );
});
