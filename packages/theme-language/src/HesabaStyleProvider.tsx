import { createGenerateClassName, StylesProvider } from "@material-ui/styles";
import React from "react";

import { LanguageProvider } from "./provider/language";
import { ThemeProvider } from "./provider/theme";
import { Dir, LangString } from "./types";

interface Props {
  children: any;
  language?: LangString;
  direction?: Dir;
  theme?: any;
}

const generateClassName = createGenerateClassName({
  productionPrefix: "Hesaba-theme",
});

function HesabaStyleProvider({
  children,
  theme,
  language,
  direction = "rtl",
}: Props) {
  return (
    <StylesProvider injectFirst generateClassName={generateClassName}>
      <LanguageProvider direction={direction} language={language}>
        <ThemeProvider rawTheme={theme}>{children}</ThemeProvider>
      </LanguageProvider>
    </StylesProvider>
  );
}

export default HesabaStyleProvider;
