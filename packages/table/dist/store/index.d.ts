import { Action, Computed } from "easy-peasy";
import { OnSetTableDataPayload } from "../types/store";
import { TableColumns, TableRows, SortType, PageDir, TooltipColumns, TooltipKeys } from "../types/main";
export interface VTStoreModel {
    VTVersion: string;
    settings: {
        direction: PageDir;
        lang: string;
    };
    rows: TableRows;
    visibleRows: TableRows;
    enhancedColumns: TableColumns;
    tooltipColumns: TooltipColumns;
    tooltipKeys: TooltipKeys;
    toggleSingleRow: Action<VTStoreModel, {
        index: number;
    }>;
    toggleAllRows: Action<VTStoreModel, {
        isSelected: boolean;
    }>;
    toggleVisibleColumns: Action<VTStoreModel, {
        index: number;
    }>;
    setTableData: Action<VTStoreModel, OnSetTableDataPayload>;
    toggleStickyColumn: Action<VTStoreModel, {
        index: number;
    }>;
    filterRowsOnSearch: Action<VTStoreModel, string>;
    sortTable: Action<VTStoreModel, {
        index: number;
        sortType: SortType;
        columnKey: string;
    }>;
    numRowsSelected: Computed<VTStoreModel, number>;
    selectedRows: Computed<VTStoreModel, Array<number>>;
    visibleColumns: Computed<VTStoreModel, TableColumns>;
    stickyColumns: Computed<VTStoreModel, TableColumns>;
}
export declare const vtStore: VTStoreModel;
declare const store: import("easy-peasy").Store<VTStoreModel, import("easy-peasy").EasyPeasyConfig<undefined, {}>>;
export default store;
