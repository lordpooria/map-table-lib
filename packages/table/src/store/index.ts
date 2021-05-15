import { action, Action, computed, Computed, createStore } from "easy-peasy";
import { OnSetTableDataPayload } from "../types/store";

import {
  TableColumns,
  TableRows,
  SortType,
  PageDir,
  TooltipColumns,
  TooltipKeys,
} from "../types/main";

export interface VTStoreModel {
  VTVersion: string;
  settings: { direction: PageDir; lang: string };
  rows: TableRows;
  visibleRows: TableRows;
  enhancedColumns: TableColumns;
  tooltipColumns: TooltipColumns;
  tooltipKeys: TooltipKeys;

  toggleSingleRow: Action<VTStoreModel, { index: number }>;
  toggleAllRows: Action<VTStoreModel, { isSelected: boolean }>;
  toggleVisibleColumns: Action<VTStoreModel, { index: number }>;

  setTableData: Action<VTStoreModel, OnSetTableDataPayload>;

  toggleStickyColumn: Action<VTStoreModel, { index: number }>;
  filterRowsOnSearch: Action<VTStoreModel, string>;

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
  rows: [],
  visibleRows: [],
  enhancedColumns: [],
  tooltipColumns: {},
  tooltipKeys: {},

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
    const {
      enhancedColumns,
      visibleRows,
      tooltipColumns,
      tooltipKeys,
    } = payload;
    state.rows = visibleRows;
    state.visibleRows = visibleRows;
    state.enhancedColumns = enhancedColumns;
    if (tooltipColumns) state.tooltipColumns = tooltipColumns;
    if (tooltipKeys) state.tooltipKeys = tooltipKeys;
  }),

  toggleVisibleColumns: action((state, { index }) => {
    state.enhancedColumns[index].visible = !state.enhancedColumns[index]
      .visible;
  }),

  toggleStickyColumn: action((state, { index }) => {
    state.enhancedColumns[index].sticked = !state.enhancedColumns[index]
      .sticked;
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
    state.enhancedColumns.filter((c) => c.visible && !c.sticked)
  ),
  stickyColumns: computed((state) =>
    state.enhancedColumns.filter((c) => c.visible && c.sticked)
  ),

  filterRowsOnSearch: action((state, text) => {
    if (!text) state.visibleRows = state.rows;
    state.visibleRows = state.rows.filter((r) =>
      Object.values(r).some((v) => typeof v === "string" && v.includes(text))
    );
  }),

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
