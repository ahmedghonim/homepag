import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // open in port 3000
  server: {
    port: 3000,
    build: {
      outDir: "build",
    }  
  },
  plugins: [react()],
});
