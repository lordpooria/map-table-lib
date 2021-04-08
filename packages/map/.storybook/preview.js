const { addDecorator, addParameters } = require("@storybook/react");
const { withPropsTable } = require("storybook-addon-react-docgen");
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
addDecorator(withPropsTable);


// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*"},
// };
