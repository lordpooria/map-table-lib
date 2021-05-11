import React from "react";

import { ThemeProvider, StylesProvider } from "@material-ui/styles";
import { useThemeObject ,jss} from "@hesaba/theme-language";

const ThemeMaker = ({ children }: { children: any }) => {
  const theme = useThemeObject();

  return (
    <StylesProvider injectFirst jss={jss}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  );
};

export default ThemeMaker;
