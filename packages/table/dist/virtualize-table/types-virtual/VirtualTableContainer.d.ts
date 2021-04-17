/// <reference types="react" />
import { ThemeOptions } from "@material-ui/core";
import { TableClasses } from "../../types/styles";
import { Dir, LangString } from "@hesaba/theme-language";
export interface VirtualTableContainerType extends VirtualTableContainerProps {
    children: React.ReactNode;
    width: number | string;
}
export interface VirtualTableContainerProps {
    classes?: TableClasses;
    direction?: Dir;
}
export interface WrapperProps {
    children: React.ReactNode;
    direction?: Dir;
    language?: LangString;
    theme?: ThemeOptions;
}
