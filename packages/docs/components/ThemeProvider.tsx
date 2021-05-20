import React from "react";
import {
  createGenerateClassName,
  createMuiTheme,
  CssBaseline,
  responsiveFontSizes,StylesProvider,ThemeProvider
} from "@material-ui/core";


import rawThemeObject from "../styles/theme";

interface Props {
  children: React.ReactNode;
}
const generateClassName = createGenerateClassName({
  productionPrefix: "Hesaba-docs",
});

export default function AppThemeProvider({ children }: Props) {
  const localRawThemeObj = JSON.parse(JSON.stringify(rawThemeObject));

  const theme = responsiveFontSizes(createMuiTheme(localRawThemeObj));

  return (
    <StylesProvider generateClassName={generateClassName}>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  );
}
