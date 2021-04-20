/// <reference types="react" />
import { DATA_FIELD } from "../utils/constants";
export declare type SortType = undefined | "ASC" | "DESC";
export declare type PageDir = "rtl" | "ltr";
export declare type ColumnType = "number" | "string" | "date" | "geographic";
export interface TableComponentProps {
    index: number;
    value: any;
    row: any;
    rowKey: any;
    label: string;
    className?: string;
}
export declare type TableColumnData = {
    key: string;
    label: string;
    type?: ColumnType;
};
export declare type RawTableColumn<T> = TableColumnData & {
    minWidth?: number;
    CellComponent?: React.FC<TableComponentProps>;
    HeaderComponent?: React.FC<any>;
    className?: string;
    custom?: T;
};
export declare type RawTableRow = Record<string, /*TableValue*/ any> & {
    id?: number | string;
};
export declare type RawTableRows = Array<RawTableRow>;
export declare type RawTableColumns<T extends {} = any> = Array<RawTableColumn<T>>;
export declare type TableColumn<T extends {} = any> = RawTableColumn<T> & {
    [DATA_FIELD]: string;
    visible: boolean;
    sticky: boolean;
    sorted: SortType;
    type: ColumnType;
};
export declare type TableColumns<T extends {} = any> = Array<TableColumn<T>>;
export declare type TableRows = Array<RawTableRow & {
    selected: boolean;
}>;
export declare type TableDataParser = (columns: RawTableColumns, rows: RawTableRows) => {
    enhancedColumns: TableColumns;
    visibleRows: TableRows;
};
