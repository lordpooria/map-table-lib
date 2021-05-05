import { __assign } from "tslib";
import { useEffect } from "react";
import { useTStoreActions } from "../store/reducerHooks";
import { DATA_FIELD, HESABA_DATA_FIELD } from "../utils/constants";
export function createEnhancedColumns(columns) {
    return columns.map(function (c) {
        var _a;
        var _b;
        return (__assign(__assign({}, c), (_a = {}, _a[DATA_FIELD] = HESABA_DATA_FIELD + "-" + c.key, _a.visible = true, _a.sticky = false, _a.sorted = undefined, _a.type = (_b = c === null || c === void 0 ? void 0 : c.type) !== null && _b !== void 0 ? _b : "string", _a)));
    });
}
export function createEnhancedRows(rows) {
    return rows.map(function (r, index) { return (__assign({ id: index, selected: false }, r)); });
}
export function parseTableData(columns, rows) {
    var enhancedColumns = createEnhancedColumns(columns);
    var visibleRows = createEnhancedRows(rows);
    return { enhancedColumns: enhancedColumns, visibleRows: visibleRows };
}
export default function useTableData(columns, rows, tableDataParser) {
    var setTableData = useTStoreActions(function (actions) { return actions.setTableData; });
    useEffect(function () {
        if (tableDataParser)
            setTableData(tableDataParser(columns, rows));
        else
            setTableData(parseTableData(columns, rows));
    }, [columns, rows, tableDataParser]);
}
