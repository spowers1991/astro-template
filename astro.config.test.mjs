import assert from "node:assert/strict";
import test from "node:test";

const ENV_KEYS = [
  "SITE_URL",
  "PUBLIC_SITE_URL",
  "VERCEL_PROJECT_PRODUCTION_URL",
];
let importCounter = 0;

async function loadConfig(env = {}) {
  const previousEnv = Object.fromEntries(ENV_KEYS.map((key) => [key, process.env[key]]));

  for (const key of ENV_KEYS) {
    if (env[key] === undefined) {
      delete process.env[key];
      continue;
    }

    process.env[key] = env[key];
  }

  try {
    const config = await import(`./astro.config.mjs?case=${importCounter += 1}`);
    return config.default;
  } finally {
    for (const key of ENV_KEYS) {
      if (previousEnv[key] === undefined) {
        delete process.env[key];
        continue;
      }

      process.env[key] = previousEnv[key];
    }
  }
}

test("omits site and sitemap when no site URL can be resolved", async () => {
  const config = await loadConfig();

  assert.equal(Object.hasOwn(config, "site"), false);
  assert.deepEqual(
    config.integrations.map((integration) => integration.name),
    ["@astrojs/react", "@astrojs/mdx"],
  );
});

test("uses the Vercel production URL to enable sitemap generation", async () => {
  const config = await loadConfig({
    VERCEL_PROJECT_PRODUCTION_URL: "astro-template.vercel.app",
  });

  assert.equal(config.site, "https://astro-template.vercel.app/");
  assert.deepEqual(
    config.integrations.map((integration) => integration.name),
    ["@astrojs/react", "@astrojs/mdx", "@astrojs/sitemap"],
  );
});

test("preserves an existing scheme in the Vercel production URL", async () => {
  const config = await loadConfig({
    VERCEL_PROJECT_PRODUCTION_URL: "https://astro-template.vercel.app",
  });

  assert.equal(config.site, "https://astro-template.vercel.app/");
  assert.deepEqual(
    config.integrations.map((integration) => integration.name),
    ["@astrojs/react", "@astrojs/mdx", "@astrojs/sitemap"],
  );
});

test("prefers SITE_URL over the Vercel production URL", async () => {
  const config = await loadConfig({
    SITE_URL: "https://docs.example.test/docs/",
    VERCEL_PROJECT_PRODUCTION_URL: "astro-template.vercel.app",
  });

  assert.equal(config.site, "https://docs.example.test/docs/");
  assert.deepEqual(
    config.integrations.map((integration) => integration.name),
    ["@astrojs/react", "@astrojs/mdx", "@astrojs/sitemap"],
  );
});

test("uses PUBLIC_SITE_URL when SITE_URL is not set", async () => {
  const config = await loadConfig({
    PUBLIC_SITE_URL: "https://public.example.test/public/",
    VERCEL_PROJECT_PRODUCTION_URL: "astro-template.vercel.app",
  });

  assert.equal(config.site, "https://public.example.test/public/");
  assert.deepEqual(
    config.integrations.map((integration) => integration.name),
    ["@astrojs/react", "@astrojs/mdx", "@astrojs/sitemap"],
  );
});

test("ignores malformed site env values and falls back to the next valid source", async () => {
  const config = await loadConfig({
    SITE_URL: "::not-a-url::",
    PUBLIC_SITE_URL: "https://public.example.test/public/",
  });

  assert.equal(config.site, "https://public.example.test/public/");
  assert.deepEqual(
    config.integrations.map((integration) => integration.name),
    ["@astrojs/react", "@astrojs/mdx", "@astrojs/sitemap"],
  );
});

test("ignores insecure http site env values and falls back to the next valid source", async () => {
  const config = await loadConfig({
    SITE_URL: "http://public.example.test/public/",
    VERCEL_PROJECT_PRODUCTION_URL: "astro-template.vercel.app",
  });

  assert.equal(config.site, "https://astro-template.vercel.app/");
  assert.deepEqual(
    config.integrations.map((integration) => integration.name),
    ["@astrojs/react", "@astrojs/mdx", "@astrojs/sitemap"],
  );
});
