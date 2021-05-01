const images = require("remark-images");
const emoji = require("remark-emoji");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [images, emoji],
  },
});

const isProd = process.env.NODE_ENV === 'production';


module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  distDir: isProd ? `build` : '.next',
});
