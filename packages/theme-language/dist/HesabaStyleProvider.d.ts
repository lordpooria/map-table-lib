/// <reference types="react" />
import { Dir, LangString } from "./types";
interface Props {
    children: any;
    language?: LangString;
    direction?: Dir;
    theme?: any;
}
declare function HesabaStyleProvider({ children, theme, language, direction, }: Props): JSX.Element;
export default HesabaStyleProvider;