"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAutoScroll = void 0;

var _table = require("@hesaba/table");

var _react = require("react");

var _store = require("../store");

const SHIFT_SCROLL_INDEX = 2;
const ITEM_SIZE = 50;

const useAutoScroll = () => {
  const mainListRef = (0, _react.useRef)();
  const currentTimeIndex = (0, _store.useTDStoreState)(state => state.currentTimeIndex);
  const setCurrentTimeIndex = (0, _store.useTDStoreActions)(actions => actions.setCurrentTimeIndex);
  const autoScroll = (0, _react.useRef)(true);
  const preventAutoScroll = (0, _react.useRef)(false);
  const setActiveRow = (0, _table.useTableRowAction)();
  const onScrolling = (0, _react.useCallback)(e => {
    var _e$target;

    const top = e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.scrollTop;
    if (!top) return;
    setCurrentTimeIndex({
      index: Math.floor(top / ITEM_SIZE) + SHIFT_SCROLL_INDEX
    });
  }, []);
  const onScroll = (0, _react.useCallback)(e => {
    if (autoScroll.current) return;
    onScrolling(e);
  }, [onScrolling]);
  const onMouseDown = (0, _react.useCallback)(() => {
    autoScroll.current = false;
  }, []);
  const onMouseUp = (0, _react.useCallback)(() => {
    autoScroll.current = true;
  }, []);
  const onWheel = (0, _react.useCallback)(e => {
    onPreventAutoScroll();
    onScrolling(e);
  }, []);

  const onPreventAutoScroll = () => {
    autoScroll.current = false;
    preventAutoScroll.current = true;
  };

  const releaseAutoScroll = (0, _react.useCallback)(() => {
    preventAutoScroll.current = false;
    autoScroll.current = true;
  }, []);
  const onRowClick = (0, _react.useCallback)(index => {
    setCurrentTimeIndex({
      index
    });
    onPreventAutoScroll();
  }, []);
  const scrollTo = (0, _react.useCallback)(index => {
    var _mainListRef$current;

    (_mainListRef$current = mainListRef.current) === null || _mainListRef$current === void 0 ? void 0 : _mainListRef$current.scrollTo({
      top: index * ITEM_SIZE,
      behavior: "smooth"
    });
  }, []);
  (0, _react.useEffect)(() => {
    if (autoScroll.current) {
      scrollTo(currentTimeIndex);
    }

    setActiveRow(currentTimeIndex);

    if (preventAutoScroll.current) {
      releaseAutoScroll();
    }
  }, [currentTimeIndex]);
  (0, _react.useEffect)(() => {
    let counter = 0;
    const interval = setInterval(() => {
      const el = document.getElementById(_table.MAIN_LIST_ID);
      counter++;

      if (el || counter > 20) {
        var _mainListRef$current2, _mainListRef$current3, _mainListRef$current4, _mainListRef$current5;

        clearInterval(interval);
        mainListRef.current = el;
        (_mainListRef$current2 = mainListRef.current) === null || _mainListRef$current2 === void 0 ? void 0 : _mainListRef$current2.addEventListener("scroll", onScroll);
        (_mainListRef$current3 = mainListRef.current) === null || _mainListRef$current3 === void 0 ? void 0 : _mainListRef$current3.addEventListener("wheel", onWheel);
        (_mainListRef$current4 = mainListRef.current) === null || _mainListRef$current4 === void 0 ? void 0 : _mainListRef$current4.addEventListener("mousedown", onMouseDown);
        (_mainListRef$current5 = mainListRef.current) === null || _mainListRef$current5 === void 0 ? void 0 : _mainListRef$current5.addEventListener("mouseup", onMouseUp);
      }
    }, 50);
    return () => {
      var _mainListRef$current6, _mainListRef$current7, _mainListRef$current8, _mainListRef$current9;

      (_mainListRef$current6 = mainListRef.current) === null || _mainListRef$current6 === void 0 ? void 0 : _mainListRef$current6.removeEventListener("scroll", onScroll);
      (_mainListRef$current7 = mainListRef.current) === null || _mainListRef$current7 === void 0 ? void 0 : _mainListRef$current7.removeEventListener("wheel", onWheel);
      (_mainListRef$current8 = mainListRef.current) === null || _mainListRef$current8 === void 0 ? void 0 : _mainListRef$current8.removeEventListener("mousedown", onMouseDown);
      (_mainListRef$current9 = mainListRef.current) === null || _mainListRef$current9 === void 0 ? void 0 : _mainListRef$current9.removeEventListener("mouseup", onMouseUp);
    };
  }, []);
  return onRowClick;
};

exports.useAutoScroll = useAutoScroll;
//# sourceMappingURL=useAutoScroll.js.map