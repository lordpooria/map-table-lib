import { action } from "easy-peasy";
export var timerStoreModel = {
    displayDate: "",
    displayTime: "",
    isAM: true,
    setDisplayDate: action(function (state, _a) {
        var displayDate = _a.displayDate, displayTime = _a.displayTime, isAM = _a.isAM;
        state.displayDate = displayDate;
        state.displayTime = displayTime;
        state.isAM = isAM;
    }),
};
