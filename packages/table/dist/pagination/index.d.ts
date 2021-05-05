/// <reference types="react" />
import { TablePaginationProps } from "@material-ui/core";
export declare type CommonTablePagination = TablePaginationProps & {
    width: number | string;
    classes?: {
        root?: string;
    };
};
export declare function TablePagination({ classes, width, rowsPerPageOptions, page, count, rowsPerPage, onRowsPerPageChange, height, ...rest }: CommonTablePagination): JSX.Element;
