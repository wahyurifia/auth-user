import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias untuk folder src
    },
  },
  server: {
    historyApiFallback: true, // Fix error 404 saat refresh di route selain "/"
  },
  preview: {
    historyApiFallback: true,
  },
});
