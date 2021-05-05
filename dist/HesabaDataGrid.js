import React from "react";
import Provider from "./container/Wrapper";
var HesabaDataGrid = function (_a) {
    var _b = _a.direction, direction = _b === void 0 ? "ltr" : _b;
    return (React.createElement(Provider, { direction: direction }));
};
export default HesabaDataGrid;
