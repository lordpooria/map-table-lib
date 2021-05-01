import { addParameters, addDecorator, configure } from "@storybook/react";
import { addReadme } from "storybook-readme";
import { themes, create } from "@storybook/theming";

addDecorator(withPropsTable);

const basicTheme = create({
  base: "light",
});

addParameters({
  options: {
    showPanel: true,
    theme: basicTheme,
    // theme: themes.dark,
  },
  readme: {
    // You can set the global code theme here.
    codeTheme: "github",

    // You can exclude prop tables globally here.
    // excludePropTables: [ButtonWithPropTypes],
  },
});

addDecorator(addReadme);

function loadStories() {
  const req = require.context(
    "../packages",
    true,
    /^\.\/[^\/]+\/stories\/.*stories\.jsx?$/
  );

  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
