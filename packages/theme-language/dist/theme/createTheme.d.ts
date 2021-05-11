export declare const jss: import("jss").Jss;
export declare const defaultTheme: {
    palette: {
        primary: {
            50: "#e8eaf6";
            100: "#c5cae9";
            200: "#9fa8da";
            300: "#7986cb";
            400: "#5c6bc0";
            500: "#3f51b5";
            600: "#3949ab";
            700: "#303f9f";
            800: "#283593";
            900: "#1a237e";
            A100: "#8c9eff";
            A200: "#536dfe";
            A400: "#3d5afe";
            A700: "#304ffe";
        };
        secondary: {
            50: "#ffebee";
            100: "#ffcdd2";
            200: "#ef9a9a";
            300: "#e57373";
            400: "#ef5350";
            500: "#f44336";
            600: "#e53935";
            700: "#d32f2f";
            800: "#c62828";
            900: "#b71c1c";
            A100: "#ff8a80";
            A200: "#ff5252";
            A400: "#ff1744";
            A700: "#d50000";
        };
        error: {
            50: "#ffebee";
            100: "#ffcdd2";
            200: "#ef9a9a";
            300: "#e57373";
            400: "#ef5350";
            500: "#f44336";
            600: "#e53935";
            700: "#d32f2f";
            800: "#c62828";
            900: "#b71c1c";
            A100: "#ff8a80";
            A200: "#ff5252";
            A400: "#ff1744";
            A700: "#d50000";
        };
    };
    typography: {
        fontFamily: string;
        headline: {
            fontSize: string;
        };
        subheading: {
            fontSize: string;
        };
        button: {
            fontWeight: number;
            textTransform: string;
        };
    };
    shape: {
        borderRadius: number;
    };
    mixins: {
        toolbar: {
            minHeight: number;
        };
    };
};
export declare function useThemeCreator(rawTheme?: any): import("@material-ui/core").Theme;
