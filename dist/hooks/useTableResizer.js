import { useEffect, useMemo, useRef } from "react";
import { DATA_FIELD, DRAG_CLASS, HESABA_TABLE_HEADER_CLASS, HESABA_TABLE_ROW_CLASS, } from "../utils/constants";
import { MIN_TABLE_WIDTH, RESIZE_HANDLE_WIDTH } from "../utils/themeConstants";
import { useTableSizeAction } from "../container/TableSizeProvider";
import { useLanguageState } from "@hesaba/theme-language";
// import { useStoreState } from "../store/reducerHooks";
export var useTableResizer = function () {
    var columnElements = useRef();
    var headers = useRef();
    var rowRef = useRef();
    var direction = useLanguageState().direction;
    // const placeholderCellRef = useRef<QuerySelectType>();
    var dirRef = useRef(direction);
    var currentWidths = useRef({});
    var totalWidth = useRef(0);
    var currentField = useRef();
    var setSizes = useTableSizeAction().setSizes;
    var tableRef = useRef();
    // const dir = useStoreState((state) => state.settings.direction);
    var _a = useMemo(function () {
        var init = function () {
            var _a, _b;
            // if (!headers.current) {
            headers.current = (_a = tableRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll("." + HESABA_TABLE_HEADER_CLASS);
            rowRef.current = (_b = tableRef.current) === null || _b === void 0 ? void 0 : _b.querySelectorAll("." + HESABA_TABLE_ROW_CLASS);
            // }
        };
        var onMouseDown = function (e) {
            var _a;
            init();
            var div = e.target;
            if (!div.classList.contains(DRAG_CLASS))
                return;
            var parent = div.previousElementSibling;
            if (!parent)
                return;
            currentField.current = parent.getAttribute(DATA_FIELD);
            //   columnElements.current = el as HTMLElement;
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
            columnElements.current = (_a = tableRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll("[" + DATA_FIELD + "=\"" + currentField.current + "\"]");
        };
        var onMouseMove = function (e) {
            if (!columnElements.current ||
                columnElements.current.length === 0 ||
                !headers.current ||
                headers.current.length === 0 ||
                !tableRef ||
                !rowRef.current)
                return;
            var newWidth = MIN_TABLE_WIDTH;
            if (dirRef.current === "rtl") {
                var right = columnElements.current[0].getBoundingClientRect().right;
                newWidth = Math.max(-e.clientX + right, MIN_TABLE_WIDTH);
            }
            else {
                var left = columnElements.current[0].getBoundingClientRect().left;
                newWidth = Math.max(e.clientX - left, MIN_TABLE_WIDTH);
            }
            var headerWidth = 0;
            headers.current.forEach(function (el) {
                return (headerWidth +=
                    el.getBoundingClientRect().width + RESIZE_HANDLE_WIDTH);
            });
            totalWidth.current = headerWidth;
            columnElements.current.forEach(function (el, index) {
                if (index === 0) {
                    el.style.width = newWidth + "px";
                    el.style.minWidth = newWidth + "px";
                    el.style.maxWidth = newWidth + "px";
                }
                else {
                    el.style.width = newWidth + RESIZE_HANDLE_WIDTH + "px";
                    el.style.minWidth = newWidth + RESIZE_HANDLE_WIDTH + "px";
                    el.style.maxWidth = newWidth + RESIZE_HANDLE_WIDTH + "px";
                }
            });
            // rowRef.current.forEach((el) => {
            //   el.style.width = `${headerWidth}px`;
            //   el.style.minWidth = `${headerWidth}px`;
            //   el.style.maxWidth = `${headerWidth}px`;
            // });
        };
        var onMouseUp = function (e) {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
            if (!currentField.current ||
                !columnElements.current ||
                columnElements.current.length === 0)
                return;
            if (dirRef.current === "rtl") {
                currentWidths.current[currentField.current] =
                    -e.clientX + columnElements.current[0].getBoundingClientRect().right;
            }
            else {
                currentWidths.current[currentField.current] =
                    e.clientX - columnElements.current[0].getBoundingClientRect().left;
            }
            setSizes({
                totalWidth: totalWidth.current,
                currentWidths: currentWidths.current,
            });
        };
        var removeMouseDown = function (table) {
            table.removeEventListener("mousedown", onMouseDown);
        };
        var addMouseDownListerner = function (table) {
            table.addEventListener("mousedown", onMouseDown);
        };
        var setTableRef = function (ref) {
            if (ref) {
                tableRef.current = ref;
                addMouseDownListerner(tableRef.current);
            }
        };
        return [setTableRef, removeMouseDown];
    }, []), setTableRef = _a[0], removeMouseDownListerner = _a[1];
    useEffect(function () {
        return function () {
            tableRef.current && removeMouseDownListerner(tableRef.current);
        };
    }, [removeMouseDownListerner]);
    useEffect(function () {
        dirRef.current = direction;
    }, [direction]);
    return { setTableRef: setTableRef, tableRef: tableRef };
};
