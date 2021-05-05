import { useCallback } from "react";
import { useTableSizeState } from "../container/TableSizeProvider";
import { CHECKBOX_SIZE, RESIZE_HANDLE_WIDTH, ROW_MIN_WIDTH, } from "./themeConstants";
export var useCalcTableWidth = function (columns, width) {
    var totalWidth = useTableSizeState().totalWidth;
    var calcRowWidth = useCallback(function () {
        if (totalWidth)
            return totalWidth > width ? totalWidth : width;
        var totalColumnSize = columns.reduce(function (acc, cur) {
            return acc + ((cur === null || cur === void 0 ? void 0 : cur.minWidth) || ROW_MIN_WIDTH + RESIZE_HANDLE_WIDTH);
        }, CHECKBOX_SIZE);
        return totalColumnSize > width ? totalColumnSize : width;
    }, [columns, width, totalWidth]);
    return calcRowWidth;
};
export function chooseClass(common, user) {
    return user ? user : common;
}
