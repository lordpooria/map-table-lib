import { addParameters, addDecorator, configure } from "@storybook/react";
import { addReadme } from "storybook-readme";
import { themes, create } from "@storybook/theming";

const basicTheme = create({
  base: "light",
  brandTitle: "README addon",
  brandUrl: "https://github.com/tuchk4/storybook-readme",
  brandImage: null,
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
  require("../stories");
}

configure(loadStories, module);
