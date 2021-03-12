import { TablePaginationProps } from "@material-ui/core";
import { TableColumn, TableColumns, TableRows } from ".";
import { CellClasses, HeaderClasses } from "./styleType";
import { CurrentWidths } from "./useTableResizerType";
export interface CommonHeaderProps {
    selectable?: boolean;
    resizable?: boolean;
    sortable?: boolean;
    isSelected: boolean;
    currentWidths: CurrentWidths;
    columns: TableColumns;
    totalWidth: number;
    classes?: HeaderClasses;
    stickyColumns?: TableColumns;
}
export interface HeaderCellProps extends TableColumn {
    colIndex: number;
    colKey: string;
    currentWidths: CurrentWidths;
    sortable?: boolean;
    resizable?: boolean;
    classes?: CellClasses;
}
export interface CommonTableRowType {
    style: any;
    rowIndex: number;
    totalWidth: number;
    currentWidths: CurrentWidths;
    columns: TableColumns;
    rows: TableRows;
    selectable?: boolean;
    classes?: {
        root?: string;
    };
    stickyColumns?: TableColumns;
}
export declare type CommonTablePagination = TablePaginationProps & {
    numRowsSelected: number;
    classes?: {
        root?: string;
    };
};
