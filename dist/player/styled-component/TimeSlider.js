var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { memo, useEffect, useState } from "react";
import { useTDStoreActions, useTDStoreState } from "../../store";
import { PlayerThumb, useCommonSliderStyles, ValueLabelComponent, } from "../../sliders";
import { Slider } from "@material-ui/core";
function valueText(value) {
    return value;
}
var TimeSlider = function (props) {
    var _a = useState({ min: 0, max: 0 }), timeSliderRange = _a[0], setTimeSliderRange = _a[1];
    var _b = useState(0), timeSlider = _b[0], setTimeSlider = _b[1];
    var formattedData = useTDStoreState(function (state) { return state.formattedData; });
    var currentTimeIndex = useTDStoreState(function (state) { return state.currentTimeIndex; });
    useEffect(function () {
        if (currentTimeIndex >= 0) {
            setTimeSlider(currentTimeIndex);
        }
    }, [currentTimeIndex]);
    useEffect(function () {
        var max = formattedData.length - 1;
        if (max > 0)
            setTimeSliderRange({ min: 0, max: max });
    }, [formattedData]);
    return (React.createElement(TimeSliderStateless, __assign({}, props, timeSliderRange, { timeSliderValue: timeSlider })));
};
var TimeSliderStateless = memo(function (_a) {
    var timeSteps = _a.timeSteps, classes = _a.classes, playerSlider = _a.playerSliderClasses, timeSliderValue = _a.timeSliderValue, min = _a.min, max = _a.max;
    var setCurrentTimeIndex = useTDStoreActions(function (actions) { return actions.setCurrentTimeIndex; });
    var commonClasses = useCommonSliderStyles();
    return (React.createElement("div", { className: (classes === null || classes === void 0 ? void 0 : classes.playerSliderWrapper) || playerSlider },
        React.createElement(Slider, __assign({ component: "div", classes: (classes === null || classes === void 0 ? void 0 : classes.playerSlider) || commonClasses, valueLabelDisplay: "auto", ThumbComponent: PlayerThumb, ValueLabelComponent: ValueLabelComponent, value: timeSliderValue, valueLabelFormat: valueText, step: timeSteps, min: min, max: max, onChange: function (_, index) {
                setCurrentTimeIndex({ index: index });
            } }, {}))));
});
export default TimeSlider;
