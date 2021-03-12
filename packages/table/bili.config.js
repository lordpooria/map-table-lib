// bili.config.js
// ...

module.exports = {
  input: "./src/index.ts",
  output: {
    moduleName: "Package",
    minify: true,
    format: ["umd", "esm"],
    dir: "./build",
  },
  plugins: {
    typescript2: {
      cacheRoot: path.join(__dirname, ".rpt2_cache"),
      useTsconfigDeclarationDir: true,
    },
  },
  // ...
};
