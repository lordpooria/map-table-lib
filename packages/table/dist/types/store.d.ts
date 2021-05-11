import { FilterOperationsType } from "./VirtualTableFilter";
import { TooltipKeys, TooltipColumns, TableColumnData, TableColumns, TableRows } from "./main";
export declare type OnSetTableDataPayload = {
    enhancedColumns: TableColumns;
    tooltipColumns?: TooltipColumns;
    tooltipKeys?: TooltipKeys;
    visibleRows: TableRows;
};
export declare type SetFilterColPayload = {
    filterIndex: number;
    column: TableColumnData;
    columnIndex: number;
};
export declare type SetFilterOpPayload = {
    filterIndex: number;
    operation: FilterOperationsType | undefined;
};
export declare type SetFilterValPayload = {
    filterIndex: number;
    value: any;
    valueIndex: number;
};
