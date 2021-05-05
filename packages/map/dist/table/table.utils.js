"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableDataParser = tableDataParser;
exports.commonSchemaColumns = void 0;

var _table = require("@hesaba/table");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _jalaliday = _interopRequireDefault(require("jalaliday"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dayjs.default.extend(_jalaliday.default);

(0, _dayjs.default)().locale("fa").calendar("jalali");
const nopeData = {
  username: "",
  id: "",
  color: "",
  lat: "",
  long: ""
};
const commonSchemaColumns = [{
  label: "index",
  key: "index"
}, {
  label: "time",
  key: "time"
}, {
  label: "username",
  key: "username"
}, {
  label: "lat",
  key: "lat"
}, {
  label: "long",
  key: "long"
}];
exports.commonSchemaColumns = commonSchemaColumns;

function tableDataParser(columns, rows, username) {
  const visibleRows = [];
  rows.forEach((row, idx) => {
    const userIndex = (row === null || row === void 0 ? void 0 : row.features).findIndex(ff => ff.properties.username == username);
    const time = (0, _dayjs.default)(row.time).locale("fa").calendar("jalali").format("YYYY D MMMM hh:mm A");

    if (userIndex === -1) {
      visibleRows.push({
        time,
        ...nopeData
      });
    }

    if (row !== null && row !== void 0 && row.features && (row === null || row === void 0 ? void 0 : row.features)[userIndex]) {
      var _f$geometry, _f$geometry$geometrie, _f$geometry$geometrie2, _f$geometry2, _f$geometry2$geometri, _f$geometry2$geometri2;

      const f = (row === null || row === void 0 ? void 0 : row.features)[userIndex];
      visibleRows.push({
        index: idx,
        time,
        username: f.properties.username,
        id: f.properties.id,
        color: f.properties.color,
        lat: (f === null || f === void 0 ? void 0 : (_f$geometry = f.geometry) === null || _f$geometry === void 0 ? void 0 : (_f$geometry$geometrie = _f$geometry.geometries[0]) === null || _f$geometry$geometrie === void 0 ? void 0 : (_f$geometry$geometrie2 = _f$geometry$geometrie.coordinates[0]) === null || _f$geometry$geometrie2 === void 0 ? void 0 : _f$geometry$geometrie2.toFixed(2)) || "",
        long: (f === null || f === void 0 ? void 0 : (_f$geometry2 = f.geometry) === null || _f$geometry2 === void 0 ? void 0 : (_f$geometry2$geometri = _f$geometry2.geometries[0]) === null || _f$geometry2$geometri === void 0 ? void 0 : (_f$geometry2$geometri2 = _f$geometry2$geometri.coordinates[1]) === null || _f$geometry2$geometri2 === void 0 ? void 0 : _f$geometry2$geometri2.toFixed(2)) || ""
      });
    }
  });
  const enhancedColumns = (0, _table.createEnhancedColumns)(columns);
  return {
    visibleRows,
    enhancedColumns
  };
}
//# sourceMappingURL=table.utils.js.map