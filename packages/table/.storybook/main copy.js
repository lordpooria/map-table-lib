module.exports = {
  stories: ["../stories/**/*.stories.@(tsx|mdx)"],
  addons: [
    "storybook-addon-react-docgen",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    {
      name: "@storybook/addon-essentials",
      options: {
        viewport: false,
      },
    },
  ],

  webpackFinal: (config) => {
    // add monorepo root as a valid directory to import modules from
    config.resolve.plugins.forEach((p) => {
      if (Array.isArray(p.appSrcs)) {
        p.appSrcs.push(path.join(__dirname, "..", "..", ".."));
      }
    });
    return config;
  },
  core: {
    builder: "webpack4",
  },
  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: "react-docgen-typescript",
  //   reactDocgenTypescriptOptions: {
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: (prop) =>
  //       prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
  //   },
  // },
};
