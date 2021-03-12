import { ColumnType } from "../../types";
import { FilterOperationsType } from "../VirtualTableFilterType";
export declare type FilterMethod = "AND" | "OR" | "CUSTOM";
export declare const FILTER_SCHEMA_KEY = "schema";
export declare const operations: (t: any) => Record<string, Array<FilterOperationsType>>;
export declare const reorderValues: (type: ColumnType | undefined, op: FilterOperationsType) => any[];
