import React from "react";

import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";

import rawThemeObj from "../utils/theme";
import fontSelector from "../utils/fontSelector";
import { useTStoreState } from "../store/reducerHooks";
import { WrapperProps } from "../virtualize-table/container-virtual";

const ThemeMaker = ({
  children,
  direction,
  theme: externalTheme,
}: WrapperProps) => {
  const lang = useTStoreState((state) => state.settings.lang);
  let localRawThemeObj;
  if (externalTheme) {
    localRawThemeObj = { ...externalTheme, direction };
  } else {
    localRawThemeObj = { ...rawThemeObj, direction };
  }
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
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeMaker;
