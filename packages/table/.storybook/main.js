module.exports = {
  stories: ["../stories/**/*.stories.@(tsx|mdx)"],
  addons: [
    "storybook-addon-react-docgen",
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
