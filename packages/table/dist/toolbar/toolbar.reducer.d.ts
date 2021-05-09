import { Action } from "easy-peasy";
import { SetFilterColPayload, SetFilterOpPayload, SetFilterValPayload } from "../types/store";
import { TableFilterType } from "../types/VirtualTableFilter";
export interface VTToolbarStoreModel {
    showFilter: boolean;
    showSearch: boolean;
    searchText: string;
    filters: Array<TableFilterType>;
    toggleShowFilter: Action<VTToolbarStoreModel, boolean>;
    toggleShowSearch: Action<VTToolbarStoreModel, boolean>;
    onSearchTextChange: Action<VTToolbarStoreModel, string>;
    filterSetColumn: Action<VTToolbarStoreModel, SetFilterColPayload>;
    filterSetOperation: Action<VTToolbarStoreModel, SetFilterOpPayload>;
    filterSetValue: Action<VTToolbarStoreModel, SetFilterValPayload>;
    filterDelete: Action<VTToolbarStoreModel, {
        index: number;
    }>;
    filterAdd: Action<VTToolbarStoreModel, {
        columnKey: string;
    }>;
}
declare const vtToolbarStore: VTToolbarStoreModel;
export default vtToolbarStore;
