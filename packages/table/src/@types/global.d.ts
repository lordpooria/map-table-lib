import themeObject from "../utils/theme";
declare global {
  type AppTheme = typeof themeObject;
  type AppDirection = "rtl" | "ltr";

  
}
