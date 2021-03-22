import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { ColumnType, TableColumnData } from "./main";
type FilterTypes = "common" | ColumnType;

// export type TableFilter = {
//   id: string;
//   name: string;
//   col: Array<TableColumn | null>;
//   op: FilterOperationsType | null;
//   val: FilterValuesType;
//   // uiValid: string | undefined;
// };

export type TableFilterType = {
  id: string;
  // key: string;
  column: Array<TableColumnData>;
  operation: FilterOperationsType | undefined;
  value: any;
};

export type FilterOperationsType = {
  key: string;
  name: string;
  type: FilterTypes;
  valSize?: number;
};

export type FilterValueType = number | string | MaterialUiPickersDate | Date;
export type FilterValuesType = Array<FilterValueType>;
