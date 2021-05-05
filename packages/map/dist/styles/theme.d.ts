declare const theme: {
    palette: {
        primary: {
            main: string;
            dark: string;
            light: string;
            border: string;
            shadow: string;
            contrastText: string;
        };
        secondary: {
            main: string;
            light: string;
            dark: string;
        };
        text: {
            primary: string;
            secondary: string;
            disabled: string;
        };
        grey: {
            A400: string;
            "600": string;
            "500": string;
            "400": string;
            "300": string;
            "200": string;
            "100": string;
        };
    };
    mixins: {
        toolbar: {
            minHeight: number;
        };
    };
    typography: {
        useNextVariants: boolean;
        fontFamily: string;
        fontSize: number;
    };
};
export default theme;
