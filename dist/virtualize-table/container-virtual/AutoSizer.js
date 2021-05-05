import React from "react";
import RVAutoSizer from "react-virtualized-auto-sizer";
/**
 * Decorator component that automatically adjusts the width and height of a single child
 */
var AutoSizer = function (_a) {
    var className = _a.className, width = _a.width, height = _a.height, children = _a.children, onResize = _a.onResize;
    var disableWidth = typeof width === "number";
    var disableHeight = typeof height === "number";
    if (disableWidth && disableHeight) {
        return (React.createElement("div", { className: className, style: { width: width, height: height, position: "relative" } }, children({ width: width, height: height })));
    }
    return (React.createElement(RVAutoSizer, { className: className, disableWidth: disableWidth, disableHeight: disableHeight, onResize: onResize }, children));
};
export default AutoSizer;
