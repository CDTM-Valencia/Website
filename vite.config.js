import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Standard React plugin

export default defineConfig({
  server: {
    port: process.env.PORT || 5173,
    host: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Vercel optimization
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
