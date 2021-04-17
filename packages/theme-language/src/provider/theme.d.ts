import { Theme } from "@material-ui/core";
export declare type ThemeContextType = Theme;
export declare function ThemeProvider({ children, rawTheme, }: {
    children: any;
    rawTheme?: any;
}): JSX.Element;
export declare function useThemeObject(): Theme;
