import React, { createContext, useContext } from "react";
import { defaultTheme, useThemeCreator } from "../theme/createTheme";
var ThemeContext = createContext({});
export function ThemeProvider(_a) {
    var children = _a.children, _b = _a.rawTheme, rawTheme = _b === void 0 ? defaultTheme : _b;
    var theme = useThemeCreator(rawTheme);
    return (React.createElement(ThemeContext.Provider, { value: theme }, children));
}
export function useThemeObject() {
    var theme = useContext(ThemeContext);
    if (!theme) {
        throw new Error("Language Setting should use inside language provider");
    }
    return theme;
}
