import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Detects if the build is running on Vercel's servers
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry
    server: { entry: "server" },
  },
  // Forces the builder to output a native Vercel deployment bundle
  nitro: isVercel ? { preset: "vercel" } : true,
});