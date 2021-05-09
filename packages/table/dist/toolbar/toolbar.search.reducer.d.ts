import { Action } from "easy-peasy";
export interface VTToolbarSearchStoreModel {
    showSearch: boolean;
    searchText: string;
    toggleShowSearch: Action<VTToolbarSearchStoreModel, boolean>;
    onSearchTextChange: Action<VTToolbarSearchStoreModel, string>;
}
declare const vtToolbarSearchStore: VTToolbarSearchStoreModel;
export default vtToolbarSearchStore;
