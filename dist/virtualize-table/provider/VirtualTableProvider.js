import React from "react";
import VirtualTableStore from "../../store/VirtualContext";
var VirtualTableProvider = function (_a) {
    var children = _a.children;
    // const calendar = "jalali2";
    return React.createElement(VirtualTableStore.Provider, null, children);
};
export default VirtualTableProvider;
