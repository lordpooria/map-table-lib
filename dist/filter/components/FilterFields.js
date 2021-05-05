import { __assign, __spreadArray } from "tslib";
import React, { memo, useEffect, useRef, useState } from "react";
import { createStyles, makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { operations } from "./utilsFilter";
import { SimpleNumericInput, SimpleStringInput } from "./FilterValues";
import DateInput from "./FilterValueDate";
import { useTStoreActions } from "../../store/reducerHooks";
import clsx from "clsx";
var useStyles = makeStyles(function () {
    return createStyles({ input: { borderColor: "transparent" } });
});
export var FilterColumn = memo(function (_a) {
    var value = _a.value, filterIndex = _a.filterIndex, columns = _a.columns, columnIndex = _a.columnIndex, classes = _a.classes;
    var t = function (v) { return v; };
    var inClasses = useStyles();
    var _b = useState(""), inputValue = _b[0], setInputValue = _b[1];
    var filterSetColumn = useTStoreActions(function (actions) { return actions.filterSetColumn; });
    // const allOptions = value && columns ? [value, ...columns] : columns;
    // if (!columns) return null;
    return (React.createElement(Autocomplete, { value: value, onChange: function (_, column) {
            if (!column || typeof column === "string")
                return;
            filterSetColumn({
                column: column,
                columnIndex: columnIndex,
                filterIndex: filterIndex,
            });
        }, freeSolo: true, inputValue: inputValue, onInputChange: function (_, newInputValue) {
            setInputValue(newInputValue);
        }, options: columns, className: clsx(inClasses.input, classes === null || classes === void 0 ? void 0 : classes.root), getOptionLabel: function (option) { return (option ? option.label : ""); }, getOptionSelected: function (option, value) {
            return (option === null || option === void 0 ? void 0 : option.label) ? option.label === value.label : true;
        }, renderInput: function (params) { return (React.createElement(TextField, __assign({}, params, { classes: { root: classes === null || classes === void 0 ? void 0 : classes.input }, label: t("column"), 
            // InputProps={{ ...params.InputProps }}
            variant: "standard" }))); } }));
});
export var FilterOperations = memo(function (_a) {
    var operation = _a.operation, filterIndex = _a.filterIndex, columnType = _a.columnType, classes = _a.classes;
    var t = function (v) { return v; };
    var inClasses = useStyles();
    var filterSetOperation = useTStoreActions(function (actions) { return actions.filterSetOperation; });
    var _b = useState(operations(t).commonOperations), options = _b[0], setOptions = _b[1];
    var _c = useState(""), inputValue = _c[0], setInputValue = _c[1];
    var lastType = useRef("");
    useEffect(function () {
        if (!columnType)
            return;
        if (lastType.current !== columnType && columnType) {
            lastType.current = columnType;
            switch (columnType) {
                case "geographic":
                    setOptions(__spreadArray([], operations(t).mapOptions));
                    break;
                case "number":
                    setOptions(__spreadArray(__spreadArray([], operations(t).commonOperations), operations(t).numericOptions));
                    break;
                case "string":
                    setOptions(__spreadArray(__spreadArray([], operations(t).commonOperations), operations(t).stringOptions));
                    break;
                case "date":
                    setOptions(__spreadArray(__spreadArray([], operations(t).commonOperations), operations(t).dateOptions));
                    break;
                default:
                    setOptions(operations(t).commonOperations);
            }
        }
    }, [columnType, t]);
    return (React.createElement(Autocomplete, { autoComplete: true, value: operation, onChange: function (_, operation) {
            if (!operation || typeof operation === "string")
                return;
            filterSetOperation({ operation: operation, filterIndex: filterIndex });
        }, freeSolo: true, inputValue: inputValue, onInputChange: function (_, newInputValue) {
            setInputValue(newInputValue);
        }, options: options, className: clsx(inClasses.input, classes === null || classes === void 0 ? void 0 : classes.root), getOptionLabel: function (option) { var _a; return (_a = option === null || option === void 0 ? void 0 : option.name) !== null && _a !== void 0 ? _a : ""; }, getOptionSelected: function (option, value) {
            return !(option === null || option === void 0 ? void 0 : option.name) ? option.name === value.name : true;
        }, renderInput: function (params) { return (React.createElement("div", { style: { display: "flex", alignItems: "center" } },
            React.createElement(TextField, __assign({}, params, { classes: { root: classes === null || classes === void 0 ? void 0 : classes.input }, label: t("op"), InputProps: __assign({}, params.InputProps), variant: "standard" })))); } }));
});
export var FilterValues = memo(function (_a) {
    var filterIndex = _a.filterIndex, val = _a.val, valIndex = _a.valIndex, columnType = _a.columnType, label = _a.label, classes = _a.classes;
    var filterSetValue = useTStoreActions(function (actions) { return actions.filterSetValue; });
    var onSetFilter = function (filterIndex, valueIndex, value) {
        filterSetValue({ filterIndex: filterIndex, valueIndex: valueIndex, value: value });
    };
    var FilterValue = undefined;
    // if (columnType === "geographic") {
    //   FilterValue = FilterMaps;
    // } else
    if (columnType === "date") {
        FilterValue = DateInput;
    }
    else if (columnType === "number") {
        FilterValue = SimpleNumericInput;
    }
    else {
        FilterValue = SimpleStringInput;
    }
    return (React.createElement(FilterValue, { filterIndex: filterIndex, valIndex: valIndex, onSetFilter: onSetFilter, value: val, label: label, classes: classes }));
});
