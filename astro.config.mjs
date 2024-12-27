import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://clmntgbr.github.io",
  base: "resume",
  trailingSlash: "always",
  integrations: [tailwind()],
});
