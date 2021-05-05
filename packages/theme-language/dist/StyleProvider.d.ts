/// <reference types="react" />
import { Dir, LangString } from "./types";
interface Props {
    children: any;
    language?: LangString;
    direction?: Dir;
    theme?: any;
}
declare function StyleProvider({ children, theme, language, direction }: Props): JSX.Element;
export default StyleProvider;
