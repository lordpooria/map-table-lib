import React, { useCallback, useEffect } from "react";
import { useLocalStore } from "easy-peasy";
import day from "dayjs";
import { timerStoreModel } from "./timeReducer";
import { formatPersianDateComplete, usePerisan, findIsAM, getAMText, getDisplayNoTimeError, getPMText, } from "./dateFormatter";
import { Typography } from "@material-ui/core";
import { useTDStoreState } from "../store/reducerHooks";
import useStyles from "./TimeComponent.styles";
import clsx from "clsx";
import ClockComponent from "./ClockComponent";
// import { TimeZone } from "../types";
var TimerComponent = function (_a) {
    var _b = _a.am, am = _b === void 0 ? getAMText : _b, _c = _a.pm, pm = _c === void 0 ? getPMText : _c, _d = _a.noTimeError, noTimeError = _d === void 0 ? getDisplayNoTimeError : _d, clockProps = _a.clockProps, dateWrapperClasses = _a.dateWrapperClasses, dateClasses = _a.dateClasses, amPmClasses = _a.amPmClasses;
    var _e = useLocalStore(function () { return timerStoreModel; }), state = _e[0], actions = _e[1];
    usePerisan();
    var currentTime = useTDStoreState(function (state) { return state.currentTime; });
    var timeClasses = useStyles();
    useEffect(function () {
        update(currentTime);
    }, [currentTime]);
    var update = useCallback(function (currentTime) {
        if (currentTime >= 0) {
            try {
                var date = day(currentTime);
                actions.setDisplayDate({
                    displayDate: formatPersianDateComplete(date),
                    displayTime: new Date(currentTime),
                    isAM: findIsAM(date),
                });
            }
            catch (e) { }
        }
        else {
            actions.setDisplayDate({
                displayDate: noTimeError,
                displayTime: "",
                isAM: true,
            });
        }
    }, []);
    return (React.createElement("div", { className: timeClasses.root },
        React.createElement("div", { className: timeClasses.clockWrapper },
            React.createElement(ClockComponent, { displayTime: state.displayTime, clockProps: clockProps }),
            React.createElement(Typography, { className: clsx(timeClasses.amPm, amPmClasses) }, state.isAM ? am : pm)),
        React.createElement("div", { className: clsx(timeClasses.dateWrapper, dateWrapperClasses) },
            React.createElement("p", { className: clsx(timeClasses.date, dateClasses) }, state.displayDate))));
};
export default TimerComponent;
