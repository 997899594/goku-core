import { defineConfig, loadEnv } from "vite";
import dts from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default () => {
  // 是否构建库版本
  return defineConfig({
    publicDir: false,
    plugins: [
      dts({
        cleanVueFileName: false,
        include: ["packages/**/*.ts"],
        outputDir: "./lib",
      }),
    ],
    resolve: {
      alias: {
        "@packages": path.resolve(__dirname, "packages"),
      },
    },
    build:{
      outDir: "lib",
      sourcemap: false,
      lib: {
        entry: path.resolve(__dirname, "packages/index.ts"),
        name: "index",
        fileName: (format) => `index.${format === "iife" ? "min" : format}.js`,
        formats: ["es", "umd", "iife"],
      },
      rollupOptions: {
        external: ["vue", "svg"],
      },
    },
  });
};
