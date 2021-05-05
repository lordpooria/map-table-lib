// bili.config.js
// ...
import path from 'path'

module.exports = {
  input: "./src/index.ts",
  output: {
    moduleName: "Package",
    minify: true,
    format: ["umd", "esm"],
    dir: "./dist",
  },
  plugins: {
    typescript2: {
      cacheRoot: path.join(__dirname, ".rpt2_cache"),
      useTsconfigDeclarationDir: true,
    },
  },
  // ...
};
