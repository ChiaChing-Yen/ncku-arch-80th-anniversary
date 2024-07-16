import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://app.rccn.dev',
  base: '/80anniv',
  trailingSlash: "ignore",
  integrations: [tailwind()]
});