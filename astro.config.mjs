// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = "https://gianmarco-fabbri.github.io";

// https://astro.build/config
export default defineConfig({
  site,
  output: "static",
  integrations: [
    sitemap({
      // The root page only redirects to /it/
      filter: (page) => page !== `${site}/`,
      i18n: {
        defaultLocale: "it",
        locales: { it: "it-IT", en: "en-US" },
      },
    }),
  ],
});
