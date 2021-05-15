/// <reference types="react" />
import { DATA_FIELD } from "../utils/constants";
export declare type SortType = undefined | "ASC" | "DESC";
export declare type PageDir = "rtl" | "ltr";
export declare type ColumnType = "number" | "string" | "date" | "geographic" | "tooltip";
export declare type TooltipComponentProps = {
    tooltipData: Record<string, any>;
};
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
    reference?: string;
};
export declare type RawTableColumn<T> = TableColumnData & {
    minWidth?: number;
    CellComponent?: React.FC<TableComponentProps>;
    TooltipComponent?: React.FC<TooltipComponentProps>;
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
    colIndex: number;
    visible: boolean;
    sticked: boolean;
    sorted: SortType;
    type: ColumnType;
};
export declare type TableColumns<T extends {} = any> = Array<TableColumn<T>>;
export declare type TooltipColumns<T extends {} = any> = Record<string, Array<TableColumn<T>>>;
export declare type TooltipKeys<T extends {} = any> = Record<string, Array<T>>;
export declare type TableRows = Array<RawTableRow & {
    selected: boolean;
}>;
export declare type TableDataParser = (columns: RawTableColumns, rows: RawTableRows) => {
    enhancedColumns: TableColumns;
    tooltipColumns?: TooltipColumns;
    tooltipKeys?: TooltipKeys;
    visibleRows: TableRows;
};
