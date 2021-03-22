import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { ColumnType, TableColumnData } from "./main";
declare type FilterTypes = "common" | ColumnType;
export declare type TableFilterType = {
    id: string;
    column: Array<TableColumnData>;
    operation: FilterOperationsType | undefined;
    value: any;
};
export declare type FilterOperationsType = {
    key: string;
    name: string;
    type: FilterTypes;
    valSize?: number;
};
export declare type FilterValueType = number | string | MaterialUiPickersDate | Date;
export declare type FilterValuesType = Array<FilterValueType>;
export {};
