import { TablePaginationProps } from "@material-ui/core";
import { RawTableColumns, RawTableRows } from "./main";
import {
  VirtualTableContainerProps,
  WrapperProps,
} from "../virtualize-table/types-virtual/VirtualTableContainer";
import { TableToolbarProps } from "@/types/TableToolbar";

import { StyleTypes } from "./styles";

interface CommonTableProps extends StyleTypes {
  height: number;
  rows: RawTableRows;
  columns: RawTableColumns;
  width?: number | string;
  /**
   * This title appear on toolbar, This is name of your table
   */
  title?: string;
  /**
   * If you wanna make selectable table each row has a check box
   */
  selectable?: boolean;
  /**
   * If you wanna make resizable column table
   * This option make some handle appear you could resize your table
   */
  resizable?: boolean;
  /**
   * If you wanna make resizable column table
   * This option make some handle appear you could resize your table
   */
  hasFilter?: boolean;
  /**
   * if you wanna make table sortable, On each header you have some option
   * on a column if you provide this props sort option on each columns
   * appears
   */
  sortable?: boolean;
  /**
   */
  operationOnRows?: Array<React.ReactNode>;
  /**
   */
  /**
   * direction by default is left to right
   */
  direction?: AppDirection;
  /**
   * if pagination data provided we render a footer pagination on table
   * for a pagination you need at least page,rowsPerPage, count of data
   */
  pagination?: TablePaginationProps;
  /**
   *
   */
  theme?: WrapperProps["theme"];
}

export interface VirtualTableProps extends CommonTableProps {
  VirtualTableContainerProps?: VirtualTableContainerProps;
  /**
   */
  VirtualToolbarProps?: TableToolbarProps;
  /**
   * in a virtual table you should specify item height
   */
  itemSize?: (_: number) => number;
}

export interface GridTableProps extends CommonTableProps {}
