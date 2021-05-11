import { TablePaginationProps } from "@material-ui/core";
import { CheckboxProps } from "@material-ui/core/Checkbox";
import { SVGProps } from "react";
import { PublicFilterProps } from "./Filter";
import { TableColumn, TableColumns } from "./main";
import {
  CellClasses,
  HeaderClasses,
  PaginationClasses,
  RowClasses,
  StyleTypes,
} from "./styles";
import { CommonPublicProps } from "./tableTypes";

export type VTMainListProps = {
  height: number;
  /**
   * If you wanna make selectable table each row has a check box
   */
  searchable?: boolean;
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
   * if you wanna make table sortable, On each header you have some option
   * on a column if you provide this props sort option on each columns
   * appears
   */
  sortable?: boolean;

  /**
   * in a virtual table you should specify item height
   */
  itemSize?: number;
  /**
   * in a virtual table you should specify item height
   */
  headerHeight?: number;
};

export type CompleteMainListProps = VTMainListProps & {
  // CheckboxProps: CheckboxProps;
  width: CommonPublicProps["width"];
  classes?: StyleTypes["classes"];
  onScroll?: any;

  // setTableRef?: any;
  extraStyle?: any;
  /**
   */
  VTHeaderProps?: VTPublicHeaderProps;
  /**
   */
  VTRowProps?: VTPublicRowProps;

  VTFilterProps?: PublicFilterProps;

  VTCommonTableElProps?: CommonTableElProps;
};

export interface HeaderCellProps extends TableColumn {
  colIndex: number;
  colKey: string;
  sortable?: VTMainListProps["sortable"];
  resizable?: VTMainListProps["resizable"];
  classes?: CellClasses;
  DividerProps?: SVGProps<any>;
}

export type VTPublicHeaderProps = CommonTableElProps & {
  DividerProps?: SVGProps<any>;
};

export type CompleteHeadProps = VTPublicHeaderProps & {
  // isSelected: boolean;
  headerHeight?: number;
  sortable?: VTMainListProps["sortable"];
  resizable?: VTMainListProps["resizable"];
  selectable?: VTMainListProps["selectable"];
  width: CommonPublicProps["width"];
  classes?: HeaderClasses;
  columns: TableColumns;
};

export interface VTPublicRowProps {
  classes?: RowClasses;
  onRowClick?: (index: number) => void;
  extraStyles?: any;
  selectedRowStyle?: any;
}

export type SpecificRowProps = CommonTableElProps & {
  selectable?: VTMainListProps["selectable"];
  rowIndex: number;
  width: CommonPublicProps["width"];
  style: any;
  columns: TableColumns;
};

export type CompleteRowProps = VTPublicRowProps & SpecificRowProps;

export type VTPublicPagination = TablePaginationProps & {
  numRowsSelected: number;
  classes?: PaginationClasses;
};

export interface CommonTableElProps {
  CheckboxProps?: CheckboxProps;
}
