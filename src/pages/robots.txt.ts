import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const rules = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
  ];

  if (site) {
    rules.push(`Sitemap: ${new URL("sitemap-index.xml", site).toString()}`);
  }

  return new Response(`${rules.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
