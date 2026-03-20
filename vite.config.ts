import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      __RAWG_API__: JSON.stringify(env.RAWG_API ?? ""),
    },
    resolve: {
      tsconfigPaths: true,
    },
  };
});
