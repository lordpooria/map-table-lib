import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@material-ui/core";

export const rawTheme = {
  palette: {
    primary: {
      main: "#1f6a6d",
      dark: "#25E47A",
      light: "#00E676",
      border: "#4dc8ff",
      shadow: "#4dc8ff",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#f1a83a",
      light: "#FEB4FD",
      dark: "#B28BFC",
    },

    text: {
      primary: "#444",
      secondary: "#1de9b6",
      disabled: "#616161",
    },
    grey: {
      A400: "#424242",
      "600": "#050302",
      "500": "#141414",
      "400": "#282828",
      "300": "#707070",
      "200": "#BCBCBC",
      "100": "#CDCDCC",
    },
  },
  mixins: {
    toolbar: {
      minHeight: 50,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Roboto", "Arial"].join(","),
    fontSize: 14,
  },
};

function createTheme(rawTheme: any) {
  let theme = createMuiTheme(rawTheme as ThemeOptions);
  theme = responsiveFontSizes(theme);
  return theme;
}

export default createTheme;
