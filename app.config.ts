import { defineConfig } from "@tanstack/react-start/config";

export default defineConfig({
  server: {
    // Generate Vercel-compatible output (functions/edge) via Nitro.
    preset: "vercel",
  },
});

