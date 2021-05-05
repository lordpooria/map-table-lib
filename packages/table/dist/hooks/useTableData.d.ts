import { RawTableColumns, RawTableRows, TableColumns, TableDataParser, TableRows } from "../types/main";
export declare function createEnhancedColumns(columns: RawTableColumns): TableColumns;
export declare function createEnhancedRows(rows: RawTableRows): TableRows;
export declare function parseTableData(columns: RawTableColumns, rows: RawTableRows): {
    enhancedColumns: TableColumns<any>;
    visibleRows: TableRows;
};
export default function useTableData(columns: RawTableColumns, rows: RawTableRows, tableDataParser: TableDataParser | undefined): void;
