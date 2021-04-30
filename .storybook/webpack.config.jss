module.exports = {
    module: {
      rules: [
        {
          test: /\.stories\.tsx?$/,
          use: [
            {
              loader: require.resolve("storybook-addon-package-json/loader")
            },
            {
              loader: require.resolve("@storybook/addon-storysource")
            }
          ]
        }
      ]
    }
  };