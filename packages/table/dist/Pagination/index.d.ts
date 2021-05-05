/// <reference types="react" />
export declare type CommonTablePagination = any & {
    width: number | string;
    classes?: {
        root?: string;
    };
};
export declare function TablePagination({ classes, width, rowsPerPageOptions, page, count, rowsPerPage, onRowsPerPageChange, height, ...rest }: CommonTablePagination): JSX.Element;
