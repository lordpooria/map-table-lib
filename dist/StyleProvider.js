import { StylesProvider as MaterialStyleProvider } from "@material-ui/core";
import React from "react";
import { LanguageProvider } from "./provider/language";
import { ThemeProvider } from "./provider/theme";
function StyleProvider(_a) {
    var children = _a.children, theme = _a.theme, language = _a.language, direction = _a.direction;
    return (React.createElement(MaterialStyleProvider, { injectFirst: true },
        React.createElement(LanguageProvider, { direction: direction, language: language },
            React.createElement(ThemeProvider, { rawTheme: theme }, children))));
}
export default StyleProvider;
