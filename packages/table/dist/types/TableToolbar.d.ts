/// <reference types="react" />
import { ToolbarClasses } from "./styles";
export interface TableToolbarCompleteProps extends PublicTableToolbarProps {
    classes?: ToolbarClasses;
}
export interface PublicTableToolbarProps {
    /**
     * This title appear on toolbar, This is name of your table
     */
    title?: string;
    /**
     */
    operationOnRows?: Array<React.ReactNode>;
}
