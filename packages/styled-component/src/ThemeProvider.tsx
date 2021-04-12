import { Theme, ThemeProvider as Provider } from "@material-ui/core";
import React from "react";
import createTheme, { rawTheme } from "./theme/createTheme";

interface Props {
  children: any;
  theme?: any;
  materialTheme?: Theme;
}

function ThemeProvider({ children, theme = rawTheme, materialTheme }: Props) {
  if (materialTheme)
    return <Provider theme={materialTheme}>{children}</Provider>;
  const richTheme = createTheme(theme);
  return <Provider theme={richTheme}>{children}</Provider>;
}

export default ThemeProvider;
