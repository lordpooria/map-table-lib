/// <reference types="react" />
import { ThemeOptions } from "@material-ui/core";
import { TableClasses } from "../../types/styles";
export interface VirtualTableContainerType extends VirtualTableContainerProps {
    children: React.ReactNode;
    width: number | string;
}
export interface VirtualTableContainerProps {
    classes?: TableClasses;
    direction?: AppDirection;
}
export interface WrapperProps {
    children: React.ReactNode;
    direction: AppDirection;
    theme?: ThemeOptions;
}
