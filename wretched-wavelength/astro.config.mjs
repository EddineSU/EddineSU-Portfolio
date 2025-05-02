import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://eddinesu.github.io/EddineSU-Portfolio/",  // Remplacé par l'URL de ton site GitHub Pages
  base: "/EddineSU-Portfolio/",  // Remplacé par le nom de ton dépôt GitHub
});
