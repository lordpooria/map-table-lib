import { FilterOperationsType } from "./VirtualTableFilter";
import { RawTableColumns, RawTableRows, TableColumnData } from "./main";
export declare type OnSetTableDataPayload = {
    columns: RawTableColumns;
    rows: RawTableRows;
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
