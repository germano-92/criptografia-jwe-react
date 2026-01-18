import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["src/main.tsx"],
    bundle: true,
    outfile: "dist/bundle.js",
    minify: false,
    sourcemap: true,
    platform: "node",
    target: ["es2020"],
    define: { "process.env.NODE_ENV": '"development"' },
  })
  // eslint-disable-next-line no-undef
  .catch(() => process.exit(1));
