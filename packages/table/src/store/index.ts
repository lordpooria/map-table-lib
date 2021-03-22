import { action, Action, computed, Computed, createStore } from "easy-peasy";
import {
  OnSetTableDataPayload,
  SetFilterColPayload,
  SetFilterOpPayload,
  SetFilterValPayload,
} from "../types/store";
import { TableFilterType } from "../types/VirtualTableFilter";
import { TableColumns, TableRows, SortType, PageDir } from "../types/main";
import { DATA_FIELD, HESABA_DATA_FIELD } from "../utils/constants";
import { reorderValues } from "../filter/components/utilsFilter";

export interface VTStoreModel {
  settings: { direction: PageDir; lang: string };
  visibleRows: TableRows;
  enhancedColumns: TableColumns;

  showFilter: boolean;
  filters: Array<TableFilterType>;

  toggleSingleRow: Action<VTStoreModel, { index: number }>;
  toggleAllRows: Action<VTStoreModel, { isSelected: boolean }>;
  toggleVisibleColumns: Action<VTStoreModel, { index: number }>;
  toggleShowFilter: Action<VTStoreModel, boolean>;

  setTableData: Action<VTStoreModel, OnSetTableDataPayload>;
  setStickyColumn: Action<VTStoreModel, { index: number }>;

  filterSetColumn: Action<VTStoreModel, SetFilterColPayload>;
  filterSetOperation: Action<VTStoreModel, SetFilterOpPayload>;
  filterSetValue: Action<VTStoreModel, SetFilterValPayload>;
  filterDelete: Action<VTStoreModel, { index: number }>;
  filterAdd: Action<VTStoreModel, { columnKey: string }>;

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
  settings: { direction: "rtl", lang: "fa" },
  visibleRows: [],
  enhancedColumns: [],

  showFilter: false,
  filters: [],

  toggleSingleRow: action((state, { index }) => {
    state.visibleRows[index].selected = !state.visibleRows[index].selected;
  }),

  toggleAllRows: action((state, { isSelected }) => {
    state.visibleRows = state.visibleRows.map((r) => ({
      ...r,
      selected: !isSelected,
    }));
  }),

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

  setTableData: action((state, payload) => {
    const { columns, rows } = payload;
    state.enhancedColumns = columns.map((c) => ({
      ...c,
      [DATA_FIELD]: `${HESABA_DATA_FIELD}-${c.key as string}`,
      visible: true,
      sticky: false,
      sorted: undefined,
      type: c?.type ?? "string",
    }));
    state.visibleRows = rows.map((r) => ({ ...r, selected: false }));
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

    state.visibleRows =
      sortType === "DESC"
        ? state.visibleRows.sort((a, b) =>
            a[columnKey] < b[columnKey] ? 1 : -1
          )
        : state.visibleRows.sort((a, b) =>
            a[columnKey] < b[columnKey] ? -1 : 1
          );
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

  filterAdd: action((state, { columnKey }) => {
    console.log(columnKey);
    state.showFilter = true;
    const col = state.enhancedColumns.filter((ec) => ec.key === columnKey);
    if (!col || col.length === 0) {
      return;
    }
    state.filters.push({
      id: new Date().getTime().toString(),
      // key: string;
      column: [{ key: col[0].key, label: col[0].label, type: col[0].type }],
      operation: undefined,
      value: [undefined],
    });
  }),

  filterDelete: action((state, { index }) => {
    // const el = findNodeState<FilterNodeProp>(state);

    state.filters?.splice(index, 1);
  }),
};

// const nodeEnv: string = (typeof process?.__ENV__ !== 'undefined' && __ENV__) as string;
const store = createStore(vtStore);

export default store;
