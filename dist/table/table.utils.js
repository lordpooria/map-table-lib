import { __assign } from "tslib";
import { createEnhancedColumns, } from "@hesaba/table";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
dayjs.extend(jalaliday);
dayjs().locale("fa").calendar("jalali");
var nopeData = {
    username: "",
    id: "",
    color: "",
    lat: "",
    long: "",
};
export var commonSchemaColumns = [
    {
        label: "index",
        key: "index",
    },
    {
        label: "time",
        key: "time",
    },
    {
        label: "username",
        key: "username",
    },
    {
        label: "lat",
        key: "lat",
    },
    {
        label: "long",
        key: "long",
    },
];
export function tableDataParser(columns, rows, username) {
    var visibleRows = [];
    rows.forEach(function (row, idx) {
        var _a, _b, _c, _d, _e, _f;
        var userIndex = (row === null || row === void 0 ? void 0 : row.features).findIndex(function (ff) { return ff.properties.username == username; });
        var time = dayjs(row.time)
            .locale("fa")
            .calendar("jalali")
            .format("YYYY D MMMM hh:mm A");
        if (userIndex === -1) {
            visibleRows.push(__assign({ time: time }, nopeData));
        }
        if ((row === null || row === void 0 ? void 0 : row.features) && (row === null || row === void 0 ? void 0 : row.features)[userIndex]) {
            var f = (row === null || row === void 0 ? void 0 : row.features)[userIndex];
            visibleRows.push({
                index: idx,
                time: time,
                username: f.properties.username,
                id: f.properties.id,
                color: f.properties.color,
                lat: ((_c = (_b = (_a = f === null || f === void 0 ? void 0 : f.geometry) === null || _a === void 0 ? void 0 : _a.geometries[0]) === null || _b === void 0 ? void 0 : _b.coordinates[0]) === null || _c === void 0 ? void 0 : _c.toFixed(2)) || "",
                long: ((_f = (_e = (_d = f === null || f === void 0 ? void 0 : f.geometry) === null || _d === void 0 ? void 0 : _d.geometries[0]) === null || _e === void 0 ? void 0 : _e.coordinates[1]) === null || _f === void 0 ? void 0 : _f.toFixed(2)) || "",
            });
        }
    });
    var enhancedColumns = createEnhancedColumns(columns);
    return { visibleRows: visibleRows, enhancedColumns: enhancedColumns };
}
