"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEnhancedColumns = createEnhancedColumns;
exports.createEnhancedRows = createEnhancedRows;
exports.parseTableData = parseTableData;
exports.default = useTableData;

var _react = require("react");

var _reducerHooks = require("../store/reducerHooks");

var _constants = require("../utils/constants");

function createEnhancedColumns(columns) {
  return columns.map(c => {
    var _c$type;

    return { ...c,
      [_constants.DATA_FIELD]: `${_constants.HESABA_DATA_FIELD}-${c.key}`,
      visible: true,
      sticky: false,
      sorted: undefined,
      type: (_c$type = c === null || c === void 0 ? void 0 : c.type) !== null && _c$type !== void 0 ? _c$type : "string"
    };
  });
}

function createEnhancedRows(rows) {
  return rows.map((r, index) => ({
    id: index,
    selected: false,
    ...r
  }));
}

function parseTableData(columns, rows) {
  const enhancedColumns = createEnhancedColumns(columns);
  const visibleRows = createEnhancedRows(rows);
  return {
    enhancedColumns,
    visibleRows
  };
}

function useTableData(columns, rows, tableDataParser) {
  const setTableData = (0, _reducerHooks.useTStoreActions)(actions => actions.setTableData);
  (0, _react.useEffect)(() => {
    if (tableDataParser) setTableData(tableDataParser(columns, rows));else setTableData(parseTableData(columns, rows));
  }, [columns, rows, tableDataParser]);
}
//# sourceMappingURL=useTableData.js.map