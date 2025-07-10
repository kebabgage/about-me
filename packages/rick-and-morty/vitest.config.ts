import { defineConfig } from "vitest/config";

// defineWorkspace provides a nice type hinting DX
export default defineConfig({
  test: {
    include: ["**/*.test.tsx"],
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
  },
});
