import React from "react";
import { ThemeProvider, StylesProvider } from "@material-ui/styles";
import { useThemeObject } from "@hesaba/theme-language";
var ThemeMaker = function (_a) {
    var children = _a.children;
    var theme = useThemeObject();
    return (React.createElement(StylesProvider, { injectFirst: true },
        React.createElement(ThemeProvider, { theme: theme }, children)));
};
export default ThemeMaker;
