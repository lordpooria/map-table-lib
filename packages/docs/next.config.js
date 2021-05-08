const images = require("remark-images");
const emoji = require("remark-emoji");
const path = require("path")
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [images, emoji],
  },
});

const isProd = process.env.NODE_ENV === "production";
console.log(__dirname)
module.exports = withMDX({
  webpack: (config, options) => {
    config.resolve.alias["react"] = path.join(
      __dirname,
      "..","..",
      "node_modules",
      "react"
    );

    return config;
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  distDir: isProd ? `build` : ".next",
});
