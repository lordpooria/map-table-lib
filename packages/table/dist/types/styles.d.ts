export interface StyleTypes {
    /**
     */
    classes?: {
        table?: TableClasses;
        toolbar?: ToolbarClasses;
        footer?: FooterClasses;
        row?: RowClasses;
        header?: HeaderClasses;
        pagination?: PaginationClasses;
    };
}
export declare type TableClasses = {
    root?: string;
    container?: string;
};
export declare type ToolbarClasses = {
    root?: string;
    icon?: string;
    iconButton?: string;
    menu?: string;
    menuItem?: string;
};
export declare type FooterClasses = {
    root?: string;
};
export declare type RowClasses = {
    root?: string;
    cell?: CellClasses;
    evenRow?: string;
    oddRow?: string;
    activateRow?: string;
};
export declare type HeaderClasses = {
    root?: string;
    cell?: CellClasses;
};
export declare type CellClasses = {
    root?: string;
    title?: string;
    checkbox?: string;
    divider?: string;
    simpleCell?: string;
};
export declare type PaginationClasses = {
    root?: string;
};
