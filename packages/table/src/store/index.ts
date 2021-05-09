import { action, Action, computed, Computed, createStore } from "easy-peasy";
import { OnSetTableDataPayload } from "../types/store";

import { TableColumns, TableRows, SortType, PageDir } from "../types/main";

export interface VTStoreModel {
  VTVersion: string;
  settings: { direction: PageDir; lang: string };
  visibleRows: TableRows;
  enhancedColumns: TableColumns;

  toggleSingleRow: Action<VTStoreModel, { index: number }>;
  toggleAllRows: Action<VTStoreModel, { isSelected: boolean }>;
  toggleVisibleColumns: Action<VTStoreModel, { index: number }>;

  setTableData: Action<VTStoreModel, OnSetTableDataPayload>;
  fakeAppendTableData: Action<VTStoreModel, any>;
  setStickyColumn: Action<VTStoreModel, { index: number }>;

  sortTable: Action<
    VTStoreModel,
    { index: number; sortType: SortType; columnKey: string }
  >;

  numRowsSelected: Computed<VTStoreModel, number>;
  selectedRows: Computed<VTStoreModel, Array<number>>;
  visibleColumns: Computed<VTStoreModel, TableColumns>;
  stickyColumns: Computed<VTStoreModel, TableColumns>;
}

export const vtStore: VTStoreModel = {
  VTVersion: "1.0.0",
  settings: { direction: "rtl", lang: "fa" },
  visibleRows: [],
  enhancedColumns: [],

  toggleSingleRow: action((state, { index }) => {
    state.visibleRows[index].selected = !state.visibleRows[index].selected;
  }),

  toggleAllRows: action((state, { isSelected }) => {
    state.visibleRows = state.visibleRows.map((r) => ({
      ...r,
      selected: !isSelected,
    }));
  }),

  setTableData: action((state, payload) => {
    const { enhancedColumns, visibleRows } = payload;
    state.visibleRows = visibleRows;
    state.enhancedColumns = enhancedColumns;
  }),

  fakeAppendTableData: action((state, { rows, index }) => {
    state.visibleRows = [
      ...state.visibleRows.slice(0, index + 1),
      ...rows,
      ...state.visibleRows.slice(index + 1),
    ];
  }),

  toggleVisibleColumns: action((state, { index }) => {
    state.enhancedColumns[index].visible = !state.enhancedColumns[index]
      .visible;
  }),

  setStickyColumn: action((state, { index }) => {
    state.enhancedColumns[index].sticky = !state.enhancedColumns[index].sticky;
  }),

  numRowsSelected: computed(
    (state) => state.visibleRows.filter((r) => r.selected).length
  ),

  selectedRows: computed(
    (state) =>
      state.visibleRows.reduce(
        (acc, cur, idx) => (cur.selected ? [...acc, idx] : acc) as any,
        []
      ) as any
  ),
  visibleColumns: computed((state) =>
    state.enhancedColumns.filter((c) => c.visible && !c.sticky)
  ),
  stickyColumns: computed((state) =>
    state.enhancedColumns.filter((c) => c.visible && c.sticky)
  ),

  sortTable: action((state, { index, sortType, columnKey }) => {
    if (!state.visibleColumns[index]) {
      console.warn("column not found something wrong!");
      return;
    }

    const idx = state.enhancedColumns.findIndex((ec) => ec.key === columnKey);
    if (idx === -1) return;

    state.enhancedColumns.map((ec) => (ec.sorted = undefined));
    state.enhancedColumns[idx].sorted = sortType;
    if (state.visibleRows.length > 0)
      state.visibleRows =
        sortType === "DESC"
          ? state.visibleRows.sort((a, b) =>
              (a[columnKey] as any) < (b[columnKey] as any) ? 1 : -1
            )
          : state.visibleRows.sort((a, b) =>
              (a[columnKey] as any) < (b[columnKey] as any) ? -1 : 1
            );
  }),
};

// const nodeEnv: string = (typeof process?.__ENV__ !== 'undefined' && __ENV__) as string;
const store = createStore(vtStore);

export default store;
