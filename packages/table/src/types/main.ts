import { DATA_FIELD } from "../utils/constants";

export type SortType = undefined | "ASC" | "DESC";

export type PageDir = "rtl" | "ltr";

export type ColumnType = "number" | "string" | "date" | "geographic";

export interface TableComponentProps {
  index: number;
  value: any;
  row: any;
  rowKey: any;
  label: string;
}

export type TableColumnData = {
  // key: keyof T;
  // label: keyof T;
  key: string;
  label: string;
  type?: ColumnType;
};

export type RawTableColumn<T> = TableColumnData & {
  minWidth?: number;
  CellComponent?: React.FC<TableComponentProps>;
  HeaderComponent?: React.FC<any>;
  className?: string;
  custom?: T;
};

type BaseTableValue = string | number | boolean;

type TableValue =
  | BaseTableValue
  | {
      value: BaseTableValue;
      collapsedRows?: RawTableRows;
      extraData?: any;
    }
  | undefined;

export type RawTableRow = Record<string, TableValue> & { id?: number | string };

export type RawTableRows = Array<RawTableRow>;

export type RawTableColumns<T extends {} = any> = Array<RawTableColumn<T>>;

export type TableColumn<T extends {} = any> = RawTableColumn<T> & {
  [DATA_FIELD]: string;
  visible: boolean;
  sticky: boolean;
  sorted: SortType;
  type: ColumnType;
};

export type TableColumns<T extends {} = any> = Array<TableColumn<T>>;

export type TableRows = Array<RawTableRow & { selected: boolean }>;

export type TableDataParser = (
  columns: RawTableColumns,
  rows: RawTableRows
) => { enhancedColumns: TableColumns; visibleRows: TableRows };
