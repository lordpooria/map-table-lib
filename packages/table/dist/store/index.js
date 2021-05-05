"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.vtStore = void 0;

var _easyPeasy = require("easy-peasy");

var _utilsFilter = require("../filter/components/utilsFilter");

const vtStore = {
  VTVersion: "1.0.0",
  settings: {
    direction: "rtl",
    lang: "fa"
  },
  visibleRows: [],
  enhancedColumns: [],
  showFilter: false,
  filters: [],
  toggleSingleRow: (0, _easyPeasy.action)((state, {
    index
  }) => {
    state.visibleRows[index].selected = !state.visibleRows[index].selected;
  }),
  toggleAllRows: (0, _easyPeasy.action)((state, {
    isSelected
  }) => {
    state.visibleRows = state.visibleRows.map(r => ({ ...r,
      selected: !isSelected
    }));
  }),
  toggleShowFilter: (0, _easyPeasy.action)((state, showFilter) => {
    if (state.filters.length === 0) {
      const col = state.enhancedColumns[0];
      state.filters.push({
        id: new Date().getTime().toString(),
        column: [{
          key: col.key,
          label: col.label,
          type: col.type
        }],
        operation: undefined,
        value: [undefined]
      });
    }

    state.showFilter = showFilter;
  }),
  setTableData: (0, _easyPeasy.action)((state, payload) => {
    const {
      enhancedColumns,
      visibleRows
    } = payload;
    state.visibleRows = visibleRows;
    state.enhancedColumns = enhancedColumns;
  }),
  fakeAppendTableData: (0, _easyPeasy.action)((state, {
    rows,
    index
  }) => {
    state.visibleRows = [...state.visibleRows.slice(0, index + 1), ...rows, ...state.visibleRows.slice(index + 1)];
  }),
  toggleVisibleColumns: (0, _easyPeasy.action)((state, {
    index
  }) => {
    state.enhancedColumns[index].visible = !state.enhancedColumns[index].visible;
  }),
  setStickyColumn: (0, _easyPeasy.action)((state, {
    index
  }) => {
    state.enhancedColumns[index].sticky = !state.enhancedColumns[index].sticky;
  }),
  numRowsSelected: (0, _easyPeasy.computed)(state => state.visibleRows.filter(r => r.selected).length),
  selectedRows: (0, _easyPeasy.computed)(state => state.visibleRows.reduce((acc, cur, idx) => cur.selected ? [...acc, idx] : acc, [])),
  visibleColumns: (0, _easyPeasy.computed)(state => state.enhancedColumns.filter(c => c.visible && !c.sticky)),
  stickyColumns: (0, _easyPeasy.computed)(state => state.enhancedColumns.filter(c => c.visible && c.sticky)),
  sortTable: (0, _easyPeasy.action)((state, {
    index,
    sortType,
    columnKey
  }) => {
    if (!state.visibleColumns[index]) {
      console.warn("column not found something wrong!");
      return;
    }

    const idx = state.enhancedColumns.findIndex(ec => ec.key === columnKey);
    if (idx === -1) return;
    state.enhancedColumns.map(ec => ec.sorted = undefined);
    state.enhancedColumns[idx].sorted = sortType;
    if (state.visibleRows.length > 0) state.visibleRows = sortType === "DESC" ? state.visibleRows.sort((a, b) => a[columnKey] < b[columnKey] ? 1 : -1) : state.visibleRows.sort((a, b) => a[columnKey] < b[columnKey] ? -1 : 1);
  }),
  filterSetColumn: (0, _easyPeasy.action)((state, action) => {
    var _filter$operation;

    const {
      filterIndex,
      column,
      columnIndex
    } = action;
    const filter = state.filters[filterIndex];

    if (((_filter$operation = filter.operation) === null || _filter$operation === void 0 ? void 0 : _filter$operation.type) !== column.type) {
      filter.operation = undefined;
    }

    filter.column[columnIndex] = column;
  }),
  filterSetOperation: (0, _easyPeasy.action)((state, action) => {
    var _state$filters$filter;

    const {
      filterIndex,
      operation
    } = action;
    state.filters[filterIndex].operation = operation;
    const type = (_state$filters$filter = state.filters[filterIndex].column[0]) === null || _state$filters$filter === void 0 ? void 0 : _state$filters$filter.type;
    state.filters[filterIndex].value = (0, _utilsFilter.reorderValues)(type, operation);
  }),
  filterSetValue: (0, _easyPeasy.action)((state, action) => {
    const {
      filterIndex,
      value,
      valueIndex
    } = action;
    state.filters[filterIndex].value[valueIndex] = value;
  }),
  filterAdd: (0, _easyPeasy.action)((state, {
    columnKey
  }) => {
    state.showFilter = true;
    const col = state.enhancedColumns.filter(ec => ec.key === columnKey);

    if (!col || col.length === 0) {
      return;
    }

    state.filters.push({
      id: new Date().getTime().toString(),
      column: [{
        key: col[0].key,
        label: col[0].label,
        type: col[0].type
      }],
      operation: undefined,
      value: [undefined]
    });
  }),
  filterDelete: (0, _easyPeasy.action)((state, {
    index
  }) => {
    var _state$filters;

    (_state$filters = state.filters) === null || _state$filters === void 0 ? void 0 : _state$filters.splice(index, 1);
  })
};
exports.vtStore = vtStore;
const store = (0, _easyPeasy.createStore)(vtStore);
var _default = store;
exports.default = _default;
//# sourceMappingURL=index.js.map