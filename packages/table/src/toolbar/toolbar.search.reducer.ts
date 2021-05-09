import { action, Action } from "easy-peasy";

export interface VTToolbarSearchStoreModel {
  showSearch: boolean;
  searchText: string;

  toggleShowSearch: Action<VTToolbarSearchStoreModel, boolean>;

  onSearchTextChange: Action<VTToolbarSearchStoreModel, string>;
}

const vtToolbarSearchStore: VTToolbarSearchStoreModel = {
  showSearch: false,

  searchText: "",

  toggleShowSearch: action((state, showFilter) => {
    state.showSearch = showFilter;
  }),
  onSearchTextChange: action((state, text) => {
    state.searchText = text;
  }),
};

export default vtToolbarSearchStore;
