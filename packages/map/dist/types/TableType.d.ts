import { HesabaTimeDimensionProps } from "./HesabaTimeDimension";
export interface TdTableProps {
    classes?: TableClasses;
    tableProps?: HesabaTimeDimensionProps;
    operationOnRows?: Array<any>;
}
export declare type TableClasses = {
    root?: string;
    tabbar?: string;
};
