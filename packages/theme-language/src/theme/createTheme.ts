import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@material-ui/core";
import { useLanguageState } from "../provider/language";
import fontSelector from "../utils/fontSelector";

import { indigo, red } from "@material-ui/core/colors";

export const defaultTheme = {
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

export function useThemeCreator(rawTheme?: any) {
  const langSetting = useLanguageState();

  const localtypography = {
    fontFamily: fontSelector(langSetting.lang),
    ...(rawTheme as any).typography,
  };

  const localRawThemeObj = {
    ...localtypography,
    ...rawTheme,
    direction: langSetting.direction,
  };

  let theme = createMuiTheme(localRawThemeObj as ThemeOptions);
  theme = responsiveFontSizes(theme);

  return theme;
}
