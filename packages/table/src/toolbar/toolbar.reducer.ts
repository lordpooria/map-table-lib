import { action, Action } from "easy-peasy";
import {
  SetFilterColPayload,
  SetFilterOpPayload,
  SetFilterValPayload,
} from "../types/store";
import { TableFilterType } from "../types/VirtualTableFilter";
import { reorderValues } from "./filter/components/utilsFilter";

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
  filterDelete: Action<VTToolbarStoreModel, { index: number }>;
  filterAdd: Action<VTToolbarStoreModel, { columnKey: string }>;
}

const vtToolbarStore: VTToolbarStoreModel = {
  showFilter: false,
  showSearch: false,
  filters: [],
  searchText: "",

  toggleShowFilter: action((state, showFilter) => {
    if (state.filters.length === 0) {
      const col = state.enhancedColumns[0];
      state.filters.push({
        id: new Date().getTime().toString(),
        // key: string;
        column: [{ key: col.key, label: col.label, type: col.type }],
        operation: undefined,
        value: [undefined],
      });
    }
    state.showFilter = showFilter;
  }),

  toggleShowSearch: action((state, showSearch) => {
    state.showSearch = showSearch;
  }),
  onSearchTextChange: action((state, text) => {
    state.searchText = text;
  }),

  filterSetColumn: action((state, action) => {
    const { filterIndex, column, columnIndex } = action;
    const filter = state.filters[filterIndex];
    if (filter.operation?.type !== column.type) {
      filter.operation = undefined;
    }
    // const colIndex = state.enhancedColumns.findIndex((ec) => ec.key === colKey);
    // if (colIndex === -1) return;

    filter.column[columnIndex] = column;
    // if (column.type === "geographic" && filter.column.length === 1) {
    //   filter.col.push(column);
    // } else if (column.type !== "geographic" && filter.col.length === 2) {
    //   el.data.filters[filterIndex].col = filter.col.slice(0, 1);
    // }
  }),

  filterSetOperation: action((state, action) => {
    const { filterIndex, operation } = action;
    // const filter = state.filters[filterIndex];

    state.filters[filterIndex].operation = operation;
    const type = state.filters[filterIndex].column[0]?.type;

    state.filters[filterIndex].value = reorderValues(
      type,
      operation as any
      // filter.value
    );
  }),

  filterSetValue: action((state, action) => {
    const { filterIndex, value, valueIndex } = action;
    state.filters[filterIndex].value[valueIndex] = value;
    // else if (val !== undefined) {
    //   el.data.filters[filterIndex].val = val;
    // }
  }),

  filterAdd: action((state) => {
    state.showFilter = true;
    // const col = state.enhancedColumns.filter((ec) => ec.key === columnKey);
    // if (!col || col.length === 0) {
    //   return;
    // }
    // state.filters.push({
    //   id: new Date().getTime().toString(),
    //   // key: string;
    //   column: [{ key: col[0].key, label: col[0].label, type: col[0].type }],
    //   operation: undefined,
    //   value: [undefined],
    // });
  }),

  filterDelete: action((state, { index }) => {
    // const el = findNodeState<FilterNodeProp>(state);

    state.filters?.splice(index, 1);
  }),
};

export default vtToolbarStore;
