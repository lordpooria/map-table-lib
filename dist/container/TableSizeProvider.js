import { useLocalStore } from "easy-peasy";
import React, { createContext, useContext } from "react";
import vtStoreTableSize from "../store/tableSize";
var TableSizeActionContext = createContext({});
var TableSizeStateContext = createContext({});
// export const TableSizeProvider: FC = ({ children }) => {
//   const easyPeasyStore = useStore<VTStoreTableSize>();
//   const isWrapepdWithVTSizeProvider = easyPeasyStore?.getState()?.VTSizeVersion;
//   if (isWrapepdWithVTSizeProvider) {
//     return <>{children}</>;
//   }
//   return <StoreProvider store={vtStoreTableSize}>{children}</StoreProvider>;
// };
export function TableSizeProvider(_a) {
    var children = _a.children;
    var _b = useLocalStore(function () { return vtStoreTableSize; }), state = _b[0], actions = _b[1];
    return (React.createElement(TableSizeStateContext.Provider, { value: { state: state } },
        React.createElement(TableSizeActionContext.Provider, { value: { actions: actions } }, children)));
}
export function useTableSizeState() {
    var state = useContext(TableSizeStateContext).state;
    if (!state) {
        throw Error("use state inside provider");
    }
    return state;
}
export function useTableSizeAction() {
    var actions = useContext(TableSizeActionContext).actions;
    if (!actions) {
        throw Error("use state inside provider");
    }
    return actions;
}
