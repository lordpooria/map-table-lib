import React from "react";
import { TextField } from "@material-ui/core";
import clsx from "clsx";
export function SimpleNumericInput(_a) {
    // const classes = filterValueStyles();
    var filterIndex = _a.filterIndex, valIndex = _a.valIndex, onSetFilter = _a.onSetFilter, value = _a.value, label = _a.label, classes = _a.classes;
    var handleChange = function (_) { return function (e) {
        if (!e.target.value)
            return;
        onSetFilter(filterIndex, valIndex, e.target.value);
    }; };
    // if (value === undefined || value === null) return null;
    return (React.createElement(TextField, { classes: { root: clsx(classes === null || classes === void 0 ? void 0 : classes.root, classes === null || classes === void 0 ? void 0 : classes.input) }, key: "number-" + valIndex, value: value, onChange: handleChange(valIndex), type: "number", label: label, variant: "standard" }));
}
export function SimpleStringInput(_a) {
    var filterIndex = _a.filterIndex, valIndex = _a.valIndex, onSetFilter = _a.onSetFilter, value = _a.value, classes = _a.classes, label = _a.label;
    var handleChange = function (valIndex) { return function (e) {
        if (!e.target.value)
            return;
        onSetFilter(filterIndex, valIndex, e.target.value);
    }; };
    // if (value === undefined || value === null) return null;
    return (React.createElement(TextField, { classes: { root: clsx(classes === null || classes === void 0 ? void 0 : classes.root, classes === null || classes === void 0 ? void 0 : classes.input) }, key: "string-" + valIndex, value: value, onChange: handleChange(valIndex), label: label, variant: "standard" }));
}
// export function DateInput({
//   filterIndex,
//   valIndex,
//   onSetFilter,
//   value,
//   classes,
//   label,
// }: FilterBaseProps) {
//   // if (value === undefined || value === null) return null;
//   return (
//     <
