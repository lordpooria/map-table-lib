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
import React, { memo } from "react";
import { RenderComponent } from "../helperComponent";
import { PlayerThumb, useCommonSliderStyles, ValueLabelComponent, } from "../../sliders";
import GaugeIcon from "../../assets/icons/common/GaugeIcon";
import { Slider } from "@material-ui/core";
function valuetext(value) {
    return value + "fps";
}
var SpeedSlider = memo(function (_a) {
    var speedStep = _a.speedStep, classes = _a.classes, speedSliderClasses = _a.speedSliderClasses, whiteIconClasses = _a.whiteIconClasses, speedIcon = _a.speedIcon, setTransitionTime = _a.setTransitionTime, min = _a.min, max = _a.max, speedSliderValue = _a.speedSliderValue;
    var commonClasses = useCommonSliderStyles();
    return (React.createElement("div", { className: (classes === null || classes === void 0 ? void 0 : classes.speedSliderWrapper) || speedSliderClasses },
        React.createElement(RenderComponent, { Component: speedIcon },
            React.createElement(GaugeIcon, { className: whiteIconClasses })),
        React.createElement(Slider, __assign({ classes: (classes === null || classes === void 0 ? void 0 : classes.speedSlider) || commonClasses, ThumbComponent: PlayerThumb, ValueLabelComponent: ValueLabelComponent, valueLabelDisplay: "auto", value: speedSliderValue, valueLabelFormat: valuetext, step: speedStep, min: min, max: max, onChange: function (_, v) {
                setTransitionTime(1000 / +v);
            } }, {}))));
});
export default SpeedSlider;
