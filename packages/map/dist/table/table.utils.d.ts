import { RawTableColumns, RawTableRows } from "@hesaba/table";
export declare const commonSchemaColumns: {
    label: string;
    key: string;
}[];
export declare function tableDataParser(columns: RawTableColumns, rows: RawTableRows, username: string): {
    visibleRows: any;
    enhancedColumns: import("@hesaba/table").TableColumns<any>;
};
