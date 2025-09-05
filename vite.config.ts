import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.rawg.io", // RAWG base URL
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "/api"),
      },
    },
  },
});
