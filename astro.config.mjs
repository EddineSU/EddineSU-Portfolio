import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: 'https://eddinesu.github.io',
	base: '/EddineSU-Portfolio',
	integrations: [tailwind()],
});
