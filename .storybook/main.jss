module.exports = {
  stories: ["../**/*.stories.@(tsx|mdx)"],
  addons: [
    "storybook-addon-react-docgen",
    "storybook-addon-package-json",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
      },
    },
    {
      name: "@storybook/addon-essentials",
      options: {
        viewport: false,
      },
    },
  ],
};
