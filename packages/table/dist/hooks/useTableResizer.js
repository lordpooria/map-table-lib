"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTableResizer = void 0;

var _react = require("react");

var _constants = require("../utils/constants");

var _themeConstants = require("../utils/themeConstants");

var _TableSizeProvider = require("../container/TableSizeProvider");

var _themeLanguage = require("@hesaba/theme-language");

const useTableResizer = () => {
  const columnElements = (0, _react.useRef)();
  const headers = (0, _react.useRef)();
  const rowRef = (0, _react.useRef)();
  const {
    direction
  } = (0, _themeLanguage.useLanguageState)();
  const dirRef = (0, _react.useRef)(direction);
  const currentWidths = (0, _react.useRef)({});
  const totalWidth = (0, _react.useRef)(0);
  const currentField = (0, _react.useRef)();
  const {
    setSizes
  } = (0, _TableSizeProvider.useTableSizeAction)();
  const tableRef = (0, _react.useRef)();
  const [setTableRef, removeMouseDownListerner] = (0, _react.useMemo)(() => {
    const init = () => {
      var _tableRef$current, _tableRef$current2;

      headers.current = (_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 ? void 0 : _tableRef$current.querySelectorAll(`.${_constants.HESABA_TABLE_HEADER_CLASS}`);
      rowRef.current = (_tableRef$current2 = tableRef.current) === null || _tableRef$current2 === void 0 ? void 0 : _tableRef$current2.querySelectorAll(`.${_constants.HESABA_TABLE_ROW_CLASS}`);
    };

    const onMouseDown = e => {
      var _tableRef$current3;

      init();
      const div = e.target;
      if (!div.classList.contains(_constants.DRAG_CLASS)) return;
      const parent = div.previousElementSibling;
      if (!parent) return;
      currentField.current = parent.getAttribute(_constants.DATA_FIELD);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      columnElements.current = (_tableRef$current3 = tableRef.current) === null || _tableRef$current3 === void 0 ? void 0 : _tableRef$current3.querySelectorAll(`[${_constants.DATA_FIELD}="${currentField.current}"]`);
    };

    const onMouseMove = e => {
      if (!columnElements.current || columnElements.current.length === 0 || !headers.current || headers.current.length === 0 || !tableRef || !rowRef.current) return;
      let newWidth = _themeConstants.MIN_TABLE_WIDTH;

      if (dirRef.current === "rtl") {
        const right = columnElements.current[0].getBoundingClientRect().right;
        newWidth = Math.max(-e.clientX + right, _themeConstants.MIN_TABLE_WIDTH);
      } else {
        const left = columnElements.current[0].getBoundingClientRect().left;
        newWidth = Math.max(e.clientX - left, _themeConstants.MIN_TABLE_WIDTH);
      }

      let headerWidth = 0;
      headers.current.forEach(el => headerWidth += el.getBoundingClientRect().width + _themeConstants.RESIZE_HANDLE_WIDTH);
      totalWidth.current = headerWidth;
      columnElements.current.forEach((el, index) => {
        if (index === 0) {
          el.style.width = `${newWidth}px`;
          el.style.minWidth = `${newWidth}px`;
          el.style.maxWidth = `${newWidth}px`;
        } else {
          el.style.width = `${newWidth + _themeConstants.RESIZE_HANDLE_WIDTH}px`;
          el.style.minWidth = `${newWidth + _themeConstants.RESIZE_HANDLE_WIDTH}px`;
          el.style.maxWidth = `${newWidth + _themeConstants.RESIZE_HANDLE_WIDTH}px`;
        }
      });
    };

    const onMouseUp = e => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      if (!currentField.current || !columnElements.current || columnElements.current.length === 0) return;

      if (dirRef.current === "rtl") {
        currentWidths.current[currentField.current] = -e.clientX + columnElements.current[0].getBoundingClientRect().right;
      } else {
        currentWidths.current[currentField.current] = e.clientX - columnElements.current[0].getBoundingClientRect().left;
      }

      setSizes({
        totalWidth: totalWidth.current,
        currentWidths: currentWidths.current
      });
    };

    const removeMouseDown = table => {
      table.removeEventListener("mousedown", onMouseDown);
    };

    const addMouseDownListerner = table => {
      table.addEventListener("mousedown", onMouseDown);
    };

    const setTableRef = ref => {
      if (ref) {
        tableRef.current = ref;
        addMouseDownListerner(tableRef.current);
      }
    };

    return [setTableRef, removeMouseDown];
  }, []);
  (0, _react.useEffect)(() => {
    return () => {
      tableRef.current && removeMouseDownListerner(tableRef.current);
    };
  }, [removeMouseDownListerner]);
  (0, _react.useEffect)(() => {
    dirRef.current = direction;
  }, [direction]);
  return {
    setTableRef,
    tableRef
  };
};

exports.useTableResizer = useTableResizer;
//# sourceMappingURL=useTableResizer.js.map