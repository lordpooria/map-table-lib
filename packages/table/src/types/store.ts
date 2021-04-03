import { FilterOperationsType } from "./VirtualTableFilter";
import {  TableColumnData, TableColumns, TableRows } from "./main";

export type OnSetTableDataPayload = {
  enhancedColumns: TableColumns;
  visibleRows: TableRows;
};

export type SetFilterColPayload = {
  filterIndex: number;
  column: TableColumnData;
  columnIndex: number;
};
export type SetFilterOpPayload = {
  filterIndex: number;
  operation: FilterOperationsType | undefined;
};
export type SetFilterValPayload = {
  filterIndex: number;
  value: any;
  valueIndex: number;
};
