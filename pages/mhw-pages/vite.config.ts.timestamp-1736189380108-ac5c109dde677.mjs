// vite.config.ts
import { defineConfig } from "file:///Users/aakshah/Desktop/projects/xe-turbo/appsparklers/node_modules/vite/dist/node/index.js";
import react from "file:///Users/aakshah/Desktop/projects/xe-turbo/appsparklers/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { extname, relative, resolve } from "path";
import dts from "file:///Users/aakshah/Desktop/projects/xe-turbo/appsparklers/node_modules/vite-plugin-dts/dist/index.mjs";
import * as glob from "file:///Users/aakshah/Desktop/projects/xe-turbo/appsparklers/node_modules/glob/dist/esm/index.js";
import { fileURLToPath } from "url";
var __vite_injected_original_dirname = "/Users/aakshah/Desktop/projects/xe-turbo/appsparklers/pages/mhw-pages";
var __vite_injected_original_import_meta_url = "file:///Users/aakshah/Desktop/projects/xe-turbo/appsparklers/pages/mhw-pages/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      include: ["lib"],
      tsconfigPath: "./tsconfig.build.json"
    })
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/main.ts"),
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "@remix-run/react"],
      input: Object.fromEntries(
        glob.sync("lib/**/*.{ts,tsx}", {
          ignore: ["lib/**/*.d.ts", "lib/**/*.stories.tsx"]
        }).map((file) => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative("lib", file.slice(0, file.length - extname(file).length)),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      ),
      output: {
        assetFileNames: "[name][extname]",
        entryFileNames: "[name].js"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYWFrc2hhaC9EZXNrdG9wL3Byb2plY3RzL3hlLXR1cmJvL2FwcHNwYXJrbGVycy9wYWdlcy9taHctcGFnZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hYWtzaGFoL0Rlc2t0b3AvcHJvamVjdHMveGUtdHVyYm8vYXBwc3BhcmtsZXJzL3BhZ2VzL21ody1wYWdlcy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYWFrc2hhaC9EZXNrdG9wL3Byb2plY3RzL3hlLXR1cmJvL2FwcHNwYXJrbGVycy9wYWdlcy9taHctcGFnZXMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIFBsdWdpbk9wdGlvbiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgeyBleHRuYW1lLCByZWxhdGl2ZSwgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCAqIGFzIGdsb2IgZnJvbSBcImdsb2JcIjtcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tIFwidXJsXCI7XG5cbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgZHRzKHtcbiAgICAgIGluY2x1ZGU6IFtcImxpYlwiXSxcbiAgICAgIHRzY29uZmlnUGF0aDogXCIuL3RzY29uZmlnLmJ1aWxkLmpzb25cIixcbiAgICB9KSxcbiAgXSBhcyBQbHVnaW5PcHRpb25bXSxcbiAgYnVpbGQ6IHtcbiAgICBjb3B5UHVibGljRGlyOiBmYWxzZSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJsaWIvbWFpbi50c1wiKSxcbiAgICAgIGZvcm1hdHM6IFtcImVzXCJdLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiwgXCJAcmVtaXgtcnVuL3JlYWN0XCJdLFxuICAgICAgaW5wdXQ6IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgICAgZ2xvYlxuICAgICAgICAgIC5zeW5jKFwibGliLyoqLyoue3RzLHRzeH1cIiwge1xuICAgICAgICAgICAgaWdub3JlOiBbXCJsaWIvKiovKi5kLnRzXCIsIFwibGliLyoqLyouc3Rvcmllcy50c3hcIl0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICAubWFwKChmaWxlOiBzdHJpbmcpID0+IFtcbiAgICAgICAgICAgIC8vIFRoZSBuYW1lIG9mIHRoZSBlbnRyeSBwb2ludFxuICAgICAgICAgICAgLy8gbGliL25lc3RlZC9mb28udHMgYmVjb21lcyBuZXN0ZWQvZm9vXG4gICAgICAgICAgICByZWxhdGl2ZShcImxpYlwiLCBmaWxlLnNsaWNlKDAsIGZpbGUubGVuZ3RoIC0gZXh0bmFtZShmaWxlKS5sZW5ndGgpKSxcbiAgICAgICAgICAgIC8vIFRoZSBhYnNvbHV0ZSBwYXRoIHRvIHRoZSBlbnRyeSBmaWxlXG4gICAgICAgICAgICAvLyBsaWIvbmVzdGVkL2Zvby50cyBiZWNvbWVzIC9wcm9qZWN0L2xpYi9uZXN0ZWQvZm9vLnRzXG4gICAgICAgICAgICBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoZmlsZSwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICAgXSlcbiAgICAgICksXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiW25hbWVdW2V4dG5hbWVdXCIsXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcIltuYW1lXS5qc1wiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlZLFNBQVMsb0JBQWtDO0FBQzVhLE9BQU8sV0FBVztBQUNsQixTQUFTLFNBQVMsVUFBVSxlQUFlO0FBQzNDLE9BQU8sU0FBUztBQUNoQixZQUFZLFVBQVU7QUFDdEIsU0FBUyxxQkFBcUI7QUFMOUIsSUFBTSxtQ0FBbUM7QUFBeU0sSUFBTSwyQ0FBMkM7QUFRblMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0YsU0FBUyxDQUFDLEtBQUs7QUFBQSxNQUNmLGNBQWM7QUFBQSxJQUNoQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLElBQ2YsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUN2QyxTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2hCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxxQkFBcUIsa0JBQWtCO0FBQUEsTUFDM0QsT0FBTyxPQUFPO0FBQUEsUUFFVCxVQUFLLHFCQUFxQjtBQUFBLFVBQ3pCLFFBQVEsQ0FBQyxpQkFBaUIsc0JBQXNCO0FBQUEsUUFDbEQsQ0FBQyxFQUNBLElBQUksQ0FBQyxTQUFpQjtBQUFBO0FBQUE7QUFBQSxVQUdyQixTQUFTLE9BQU8sS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLFFBQVEsSUFBSSxFQUFFLE1BQU0sQ0FBQztBQUFBO0FBQUE7QUFBQSxVQUdqRSxjQUFjLElBQUksSUFBSSxNQUFNLHdDQUFlLENBQUM7QUFBQSxRQUM5QyxDQUFDO0FBQUEsTUFDTDtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
