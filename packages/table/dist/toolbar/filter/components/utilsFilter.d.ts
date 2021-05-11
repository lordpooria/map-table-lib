import { ColumnType } from "../../../types/main";
import { FilterOperationsType } from "../../../types/VirtualTableFilter";
export declare type FilterMethod = "AND" | "OR" | "CUSTOM";
export declare const FILTER_SCHEMA_KEY = "schema";
export declare const operations: (t: any) => Record<string, Array<FilterOperationsType>>;
export declare const reorderValues: (type: ColumnType | undefined, op: FilterOperationsType) => any[];
