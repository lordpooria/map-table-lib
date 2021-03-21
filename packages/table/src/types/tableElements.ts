import { TablePaginationProps } from "@material-ui/core";
import { TableColumn, TableColumns, TableRows } from "./main";
import { CellClasses, HeaderClasses } from "./styles";
import { CurrentWidths } from "./useTableResizer";

export interface CommonHeaderProps {
  selectable?: boolean;
  resizable?: boolean;
  sortable?: boolean;
  isSelected: boolean;
  currentWidths: CurrentWidths;
  columns: TableColumns;
  totalWidth: number;
  classes?: HeaderClasses;
  stickyColumns?: TableColumns;
}

export interface HeaderCellProps extends TableColumn {
  colIndex: number;
  colKey: string;
  currentWidths: CurrentWidths;
  sortable?: boolean;
  resizable?: boolean;
  classes?: CellClasses;
}

export interface CommonTableRowType {
  style: any;
  rowIndex: number;
  totalWidth: number;
  currentWidths: CurrentWidths;
  columns: TableColumns;
  rows: TableRows;
  selectable?: boolean;
  classes?: { root?: string };
  stickyColumns?: TableColumns;
}

export type CommonTablePagination = TablePaginationProps & {
  numRowsSelected: number;
  classes?: { root?: string };
};
