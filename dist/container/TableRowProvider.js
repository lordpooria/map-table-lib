import React, { createContext, useCallback, useContext, useState } from "react";
var TableSizeActionContext = createContext({});
var TableRowStateContext = createContext({});
export function TableRowProvider(_a) {
    var children = _a.children;
    // const [state, actions] = useLocalStore(() => vtStoreTableSize);
    var _b = useState({
        activeRow: -1,
    }), state = _b[0], setState = _b[1];
    var setActiveRow = useCallback(function (index) {
        setState({ activeRow: index });
    }, []);
    return (React.createElement(TableRowStateContext.Provider, { value: state },
        React.createElement(TableSizeActionContext.Provider, { value: setActiveRow }, children)));
}
export function useTableRowState() {
    var state = useContext(TableRowStateContext);
    if (!state) {
        throw Error("use state inside provider");
    }
    return state;
}
export function useTableRowAction() {
    var actions = useContext(TableSizeActionContext);
    if (!actions) {
        throw Error("use state inside provider");
    }
    return actions;
}
