import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import { extname, relative, resolve } from "path";
import dts from "vite-plugin-dts";
import * as glob from "glob";
import { fileURLToPath } from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["lib"],
      tsconfigPath: "./tsconfig.build.json",
    }),
  ] as PluginOption[],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "@remix-run/react"],
      input: Object.fromEntries(
        glob
          .sync("lib/**/*.{ts,tsx}", {
            ignore: ["lib/**/*.d.ts", "lib/**/*.stories.tsx"],
          })
          .map((file: string) => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative("lib", file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
