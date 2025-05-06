import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://eddinesu.github.io/EddineSU-Portfolio/",  // Optionnel pour local
  // base: "/EddineSU-Portfolio/",  // Commenter cette ligne pour du développement local
});
