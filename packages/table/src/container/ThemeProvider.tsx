import React from "react";
import { create } from "jss";
import expand from "jss-plugin-expand";
import rtl from "jss-rtl";
import {
  ThemeProvider,
  StylesProvider,
  createGenerateClassName,
  jssPreset,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";

import rawThemeObj from "../utils/theme";
import fontSelector from "../utils/fontSelector";
import { useTStoreState } from "../store/reducerHooks";
//create material-ui themes
/* const rawRTLThemeObj = { ...rawThemeObj, direction: 'rtl' }
const theme = createMuiTheme(rawThemeObj);
const RTLtheme = createMuiTheme(rawRTLThemeObj); */

// add "jss-plugin-expand" to it's correct place in preset Default
const PluginArray = [...jssPreset().plugins, rtl()];
PluginArray.splice(4, 0, expand());

// Create a JSS instance with the default preset of plugins + expand plugin.
const jss = create({
  plugins: [...PluginArray],
});

// The standard class name generator.
const generateClassName = createGenerateClassName({
  productionPrefix: "Hesaba",
});

const ThemeMaker = ({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: AppDirection;
}) => {
  
  const lang = useTStoreState((state) => state.settings.lang);
  let localRawThemeObj = { ...rawThemeObj,direction };
  // if (direction === "rtl") {
  //   localRawThemeObj = { ...rawThemeObj, direction: "rtl" } as any;
  // }
  const localtypography = {
    ...localRawThemeObj.typography,
    fontFamily: fontSelector(lang),
  };
  localRawThemeObj = { ...localRawThemeObj, typography: localtypography };

  let theme = createMuiTheme(localRawThemeObj);
  theme = responsiveFontSizes(theme);
  return (
    <StylesProvider jss={jss} generateClassName={generateClassName}>
      {/* MuiThemeProvider makes the theme available down the React tree
          thanks to React context. */}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  );
};

export default ThemeMaker;
