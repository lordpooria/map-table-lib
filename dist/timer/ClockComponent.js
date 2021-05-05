import { __assign } from "tslib";
import React, { memo } from "react";
import Clock from "react-clock";
var ClockComponent = memo(function (_a) {
    var displayTime = _a.displayTime, clockProps = _a.clockProps;
    return (React.createElement(Clock, __assign({ value: displayTime, size: 80, renderNumbers: true }, clockProps)));
});
export default ClockComponent;
