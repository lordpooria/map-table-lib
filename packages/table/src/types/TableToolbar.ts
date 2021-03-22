import { TableColumns } from "./main";
import { ToolbarClasses } from "./styles";

export interface TableToolbarCompleteProps extends TableToolbarProps {
  numRowsSelected: number;
  columns: TableColumns;
}

export interface TableToolbarProps {
  title?: string;
  operationOnRows: any;
  classes?: ToolbarClasses;
}
