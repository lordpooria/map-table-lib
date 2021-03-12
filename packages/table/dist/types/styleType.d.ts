export interface StyleTypes {
    /**
     */
    classes?: {
        table?: TableClasses;
        toolbar?: ToolbarClasses;
        footer?: FooterClasses;
        row?: RowClasses;
        header?: HeaderClasses;
    };
}
export declare type TableClasses = {
    root?: string;
    container?: string;
};
export declare type ToolbarClasses = {
    root?: string;
};
export declare type FooterClasses = {
    root?: string;
};
export declare type RowClasses = {
    root?: string;
    cell?: CellClasses;
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
};
