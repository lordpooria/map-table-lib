import { Theme } from "@material-ui/core";
import React, { createContext, useContext } from "react";
import { defaultTheme, useThemeCreator } from "../theme/createTheme";

export type ThemeContextType = Theme;

const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProvider({
  children,
  rawTheme = defaultTheme,
}: {
  children: any;
  rawTheme?: any;
}) {
  const theme = useThemeCreator(rawTheme);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useThemeObject() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("Language Setting should use inside language provider");
  }

  return theme;
}
