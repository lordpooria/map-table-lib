import { FilterOperationsType } from "../filter/VirtualTableFilterType";
import { RawTableColumns, RawTableRows, TableColumnData } from "../types";

export type OnSetTableDataPayload = {
  columns: RawTableColumns;
  rows: RawTableRows;
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
