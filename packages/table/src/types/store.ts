import { FilterOperationsType } from "./VirtualTableFilter";
import { TooltipKeys,TooltipColumns, TableColumnData, TableColumns, TableRows } from "./main";

export type OnSetTableDataPayload = {
  enhancedColumns: TableColumns;
  tooltipColumns?: TooltipColumns;
  tooltipKeys?: TooltipKeys;

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
