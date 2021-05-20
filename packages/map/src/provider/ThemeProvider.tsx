import React from "react";

import {
  ThemeProvider,
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/styles";
import { useThemeObject } from "@hesaba/theme-language";

const generateClassName = createGenerateClassName({
  productionPrefix: "Hesaba-map",
});

const ThemeMaker = ({ children }: { children: any }) => {
  const theme = useThemeObject();

  return (
    <StylesProvider
      injectFirst
      generateClassName={generateClassName} /*jss={jss}*/
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  );
};

export default ThemeMaker;
