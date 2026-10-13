import type { Cinema } from "@/services/[Cinemas]/{Cinema}/types/Cinema";

export const sampleCinemas: Cinema[] = [
  { id: "odeon-leicester-square", name: "Odeon Leicester Square", city: "London", screens: 1, url: "https://www.odeon.co.uk" },
  { id: "everyman-borough-yards", name: "Everyman Borough Yards", city: "London", screens: 5, url: "https://www.everymancinema.com" },
  { id: "light-cinema-cambridge", name: "Light Cinema", city: "Cambridge", screens: 9, url: "https://www.lightcinema.co.uk" },
  { id: "home-manchester", name: "HOME Cinema", city: "Manchester", screens: 5, url: "https://homemcr.org" },
  { id: "filmhouse-edinburgh", name: "Filmhouse", city: "Edinburgh", screens: 3, url: "https://www.filmhousecinema.com" },
];
