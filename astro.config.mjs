import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://wanhsiyuan.com",
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
    },
  },
});
