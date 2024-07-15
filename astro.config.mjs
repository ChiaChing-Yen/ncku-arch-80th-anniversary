import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  buildOptions: {
    site: '/80anniv',
  },
  integrations: [tailwind()]
});