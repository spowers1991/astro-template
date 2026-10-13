export interface MovieOption {
  id: string;
  name: string;
  // Sanity slug; set it when a page exists at /movies/<slug>
  slug?: string;
}

export const sampleMovies: MovieOption[] = [
  { id: "inception", name: "Inception" },
  { id: "the-godfather", name: "The Godfather" },
  { id: "spirited-away", name: "Spirited Away" },
  { id: "parasite", name: "Parasite" },
  { id: "blade-runner-2049", name: "Blade Runner 2049" },
];
