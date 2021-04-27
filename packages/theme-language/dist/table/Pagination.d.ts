import { TablePaginationProps } from "@material-ui/core";
export declare type CommonTablePagination = TablePaginationProps & {
    width: number | string;
    numRowsSelected: number;
    classes?: {
        root?: string;
    };
    direction: "rtl" | "ltr";
};
export declare function TablePagination({ numRowsSelected, classes, width, direction, rowsPerPageOptions, page, count, rowsPerPage, onRowsPerPageChange, ...rest }: CommonTablePagination): JSX.Element;
