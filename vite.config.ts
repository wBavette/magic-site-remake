import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";

const srcPath = fileURLToPath(new URL("./src/", import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  // NOTE: We intentionally avoid Lovable-specific dev plugins here so the project
  // runs the same locally as it does in the Lovable preview.
  plugins: [react()],
  resolve: {
    // Safer than aliasing "@" directly (which can clash with scoped packages).
    alias: [{ find: /^@\//, replacement: srcPath }],
  },
}));

