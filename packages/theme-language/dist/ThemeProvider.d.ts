import { Theme } from "@material-ui/core";
interface Props {
    children: any;
    theme?: any;
    materialTheme?: Theme;
}
declare function ThemeProvider({ children, theme, materialTheme }: Props): JSX.Element;
export default ThemeProvider;
