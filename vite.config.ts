import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/policy-admin/",
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      pages: path.resolve(__dirname, "./src/pages"),
      components: path.resolve(__dirname, "./src/components"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      types: path.resolve(__dirname, "./src/types"),
      assets: path.resolve(__dirname, "./src/assets"),
      models: path.resolve(__dirname, "./src/models"),
      services: path.resolve(__dirname, "./src/services"),
      constants: path.resolve(__dirname, "./src/constants"),
      routes: path.resolve(__dirname, "./src/routes"),
      context: path.resolve(__dirname, "./src/context"),
      utils: path.resolve(__dirname, "./src/utils"),
      sections: path.resolve(__dirname, "./src/sections"),
      data: path.resolve(__dirname, "./src/data"),
    },
  },
});
