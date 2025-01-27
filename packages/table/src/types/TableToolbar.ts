import { ToolbarClasses } from "./styles";

export interface TableToolbarCompleteProps extends PublicTableToolbarProps {
  // columns: TableColumns;
  classes?: ToolbarClasses;
  hasFilter?: boolean;
  searchable?: boolean;
}

export interface PublicTableToolbarProps {
  /**
   * This title appear on toolbar, This is name of your table
   */
  title?: string;
  /**
   */

  operationOnRows?: Array<React.ReactNode>;
  height?: number;
  onSearchTextChange?: (_: string) => void;
  onFilterChange?: (_: any) => void;
}
