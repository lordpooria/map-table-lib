import { __assign } from "tslib";
import { createMuiTheme, responsiveFontSizes, } from "@material-ui/core";
import { useLanguageState } from "../provider/language";
import fontSelector from "../utils/fontSelector";
import { indigo, red } from "@material-ui/core/colors";
export var defaultTheme = {
    palette: {
        primary: indigo,
        secondary: red,
        error: red,
    },
    typography: {
        fontFamily: 'Vazir,Roboto,"Helvetica Neue",Arial,sans-serif',
        headline: {
            fontSize: "1rem",
        },
        subheading: {
            fontSize: "0.8125rem",
        },
        button: {
            fontWeight: 400,
            textTransform: "initial",
        },
    },
    shape: {
        borderRadius: 4,
    },
    mixins: {
        toolbar: {
            minHeight: 50,
        },
    },
};
export function useThemeCreator(rawTheme) {
    var langSetting = useLanguageState();
    var localtypography = __assign({ fontFamily: fontSelector(langSetting.lang) }, rawTheme.typography);
    var localRawThemeObj = __assign(__assign(__assign({}, localtypography), rawTheme), { direction: langSetting.direction });
    var theme = createMuiTheme(localRawThemeObj);
    theme = responsiveFontSizes(theme);
    return theme;
}
