import { TableClasses } from "@hesaba/table";
export interface StyleTypes {
    /**
     */
    classes?: {
        table?: TDTableClasses;
        legend?: LegendClasses;
    };
}
export declare type TDTableClasses = TableClasses & {
    tabbar?: string;
};
export declare type LegendClasses = {
    root?: string;
    item?: string;
    text?: string;
    colorIndicator?: string;
};
