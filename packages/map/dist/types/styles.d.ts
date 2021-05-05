import { TableClasses } from "@hesaba/table";
export interface StyleTypes {
    /**
     */
    classes?: {
        table?: TDTableClasses;
        legend?: LegendClasses;
        map?: MapClasses;
        tdRoot?: ContainerClasses;
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
export declare type ContainerClasses = string;
export declare type MapClasses = string;
