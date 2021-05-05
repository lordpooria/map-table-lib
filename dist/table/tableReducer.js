import { action } from "easy-peasy";
export var tdStoreTableModel = {
    tabs: [],
    tabIndex: "0",
    indicatorColor: "#FFF",
    setTabs: action(function (state, tabs) {
        state.tabs = tabs;
        state.tabIndex = tabs[0].id;
        state.indicatorColor = tabs[0].color;
    }),
    setTabIndex: action(function (state, _a) {
        var tabIndex = _a.tabIndex, color = _a.color;
        state.tabIndex = tabIndex;
        state.indicatorColor = color;
    }),
};
// const nodeEnv: string = (typeof process?.__ENV__ !== 'undefined' && __ENV__) as string;
// const store = createStore(vtStoreTableSize);
export default tdStoreTableModel;
