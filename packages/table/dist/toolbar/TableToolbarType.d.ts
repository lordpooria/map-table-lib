import { TableColumns } from "../types";
import { ToolbarClasses } from "../types/styleType";
export interface TableToolbarCompleteProps extends TableToolbarProps {
    numRowsSelected: number;
    columns: TableColumns;
}
export interface TableToolbarProps {
    title?: string;
    operationOnRows: any;
    classes?: ToolbarClasses;
}
