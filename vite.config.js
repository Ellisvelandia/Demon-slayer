import htmlPurge from "vite-plugin-purgecss";
import { createHtmlPlugin } from "vite-plugin-html";
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = resolve(__dirname, "./");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  plugins: [
    react(),
    htmlPurge(),
    createHtmlPlugin({
      minify: true,
      removeComments: true,
      collapseWhitespace: true,
    }),
  ],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
      },
      output: {
        chunkSizeWarningLimit: 1500,

        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
