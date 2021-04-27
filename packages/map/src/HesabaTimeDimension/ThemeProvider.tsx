import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import { useThemeObject } from "@hesaba/theme-language"

const ThemeMaker = ({ children }: { children: any }) => {
  const theme = useThemeObject();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeMaker;
