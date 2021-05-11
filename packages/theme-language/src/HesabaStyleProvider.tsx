import React from "react";

import { StylesProvider as MaterialStyleProvider } from "@material-ui/core";
import { LanguageProvider } from "./provider/language";
import { ThemeProvider } from "./provider/theme";
import { Dir, LangString } from "./types";

interface Props {
  children: any;
  language?: LangString;
  direction?: Dir;
  theme?: any;
}

function HesabaStyleProvider({
  children,
  theme,
  language,
  direction = "rtl",
}: Props) {
  return (
    <MaterialStyleProvider injectFirst>
      <LanguageProvider direction={direction} language={language}>
        <ThemeProvider rawTheme={theme}>{children}</ThemeProvider>
      </LanguageProvider>
    </MaterialStyleProvider>
  );
}

export default HesabaStyleProvider;
