import React from "react";
import {
  createMuiTheme,
  CssBaseline,
  responsiveFontSizes,StylesProvider
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";

import rawThemeObject from "../styles/theme";

interface Props {
  children: React.ReactNode;
}

export default function AppThemeProvider({ children }: Props) {
  const localRawThemeObj = JSON.parse(JSON.stringify(rawThemeObject));

  const theme = responsiveFontSizes(createMuiTheme(localRawThemeObj));

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  );
}
