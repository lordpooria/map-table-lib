import { StylesProvider as MaterialStyleProvider } from "@material-ui/core";
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

function StyleProvider({ children, theme, language, direction }: Props) {
  return (
    <MaterialStyleProvider injectFirst>
      <LanguageProvider direction={direction} language={language}>
        <ThemeProvider rawTheme={theme}>{children}</ThemeProvider>
      </LanguageProvider>
    </MaterialStyleProvider>
  );
}

export default StyleProvider;
