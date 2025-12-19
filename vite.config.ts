import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "url";


const srcFsPath = fileURLToPath(new URL("./src/", import.meta.url));
// Vite/Rollup aliasing behaves best with POSIX-style paths, even on Windows.
const srcPosixPath = srcFsPath.replace(/\\/g, "/");

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
    alias: [{ find: /^@\//, replacement: srcPosixPath }],
  },
}));

