import { resolve } from "path";
import { defineConfig } from "vite";
import viteSvgToWebfont from "vite-svg-2-webfont";

export default defineConfig({
  plugins: [
    viteSvgToWebfont({
      context: resolve(__dirname, "icons"),
    }),
  ],
});
