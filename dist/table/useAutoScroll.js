import { MAIN_LIST_ID, useTableRowAction } from "@hesaba/table";
import { useCallback, useEffect, useRef } from "react";
import { useTDStoreActions, useTDStoreState } from "../store";
var SHIFT_SCROLL_INDEX = 2;
var ITEM_SIZE = 50;
export var useAutoScroll = function () {
    var mainListRef = useRef();
    var currentTimeIndex = useTDStoreState(function (state) { return state.currentTimeIndex; });
    var setCurrentTimeIndex = useTDStoreActions(function (actions) { return actions.setCurrentTimeIndex; });
    var autoScroll = useRef(true);
    var preventAutoScroll = useRef(false);
    var setActiveRow = useTableRowAction();
    var onScrolling = useCallback(function (e) {
        var _a;
        var top = (_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.scrollTop;
        if (!top)
            return;
        setCurrentTimeIndex({
            index: Math.floor(top / ITEM_SIZE) + SHIFT_SCROLL_INDEX,
        });
        // setCurrentTimeIndex()
    }, []);
    var onScroll = useCallback(function (e) {
        if (autoScroll.current)
            return;
        onScrolling(e);
    }, [onScrolling]);
    var onMouseDown = useCallback(function () {
        autoScroll.current = false;
    }, []);
    var onMouseUp = useCallback(function () {
        autoScroll.current = true;
    }, []);
    var onWheel = useCallback(function (e) {
        onPreventAutoScroll();
        onScrolling(e);
    }, []);
    var onPreventAutoScroll = function () {
        autoScroll.current = false;
        preventAutoScroll.current = true;
    };
    var releaseAutoScroll = useCallback(function () {
        preventAutoScroll.current = false;
        autoScroll.current = true;
    }, []);
    var onRowClick = useCallback(function (index) {
        setCurrentTimeIndex({ index: index });
        onPreventAutoScroll();
    }, []);
    var scrollTo = useCallback(function (index) {
        var _a;
        (_a = mainListRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
            top: index * ITEM_SIZE,
            behavior: "smooth",
        });
    }, []);
    useEffect(function () {
        if (autoScroll.current) {
            scrollTo(currentTimeIndex);
        }
        setActiveRow(currentTimeIndex);
        if (preventAutoScroll.current) {
            releaseAutoScroll();
        }
    }, [currentTimeIndex]);
    useEffect(function () {
        var counter = 0;
        var interval = setInterval(function () {
            var _a, _b, _c, _d;
            var el = document.getElementById(MAIN_LIST_ID);
            counter++;
            if (el || counter > 20) {
                clearInterval(interval);
                mainListRef.current = el;
                (_a = mainListRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener("scroll", onScroll);
                (_b = mainListRef.current) === null || _b === void 0 ? void 0 : _b.addEventListener("wheel", onWheel);
                (_c = mainListRef.current) === null || _c === void 0 ? void 0 : _c.addEventListener("mousedown", onMouseDown);
                (_d = mainListRef.current) === null || _d === void 0 ? void 0 : _d.addEventListener("mouseup", onMouseUp);
            }
        }, 50);
        return function () {
            var _a, _b, _c, _d;
            (_a = mainListRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("scroll", onScroll);
            (_b = mainListRef.current) === null || _b === void 0 ? void 0 : _b.removeEventListener("wheel", onWheel);
            (_c = mainListRef.current) === null || _c === void 0 ? void 0 : _c.removeEventListener("mousedown", onMouseDown);
            (_d = mainListRef.current) === null || _d === void 0 ? void 0 : _d.removeEventListener("mouseup", onMouseUp);
        };
    }, []);
    return onRowClick;
};
