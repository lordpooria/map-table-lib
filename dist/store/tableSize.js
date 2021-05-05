import { action } from "easy-peasy";
export var vtStoreTableSize = {
    currentWidths: {},
    totalWidth: 0,
    setSizes: action(function (state, _a) {
        var totalWidth = _a.totalWidth, currentWidths = _a.currentWidths;
        state.currentWidths = currentWidths;
        state.totalWidth = totalWidth;
    }),
    setCurrentWidth: action(function (state, _a) {
        var currentWidths = _a.currentWidths;
        state.currentWidths = currentWidths;
    }),
    setTotalWidth: action(function (state, _a) {
        var totalWidth = _a.totalWidth;
        state.totalWidth = totalWidth;
    }),
};
// const nodeEnv: string = (typeof process?.__ENV__ !== 'undefined' && __ENV__) as string;
// const store = createStore(vtStoreTableSize);
export default vtStoreTableSize;
