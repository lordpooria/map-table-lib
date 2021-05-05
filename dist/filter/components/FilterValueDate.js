import React from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/dayjs';
// import EditedJalaliUtils from "../../utils/calendar";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
dayjs.extend(jalaliday);
export var FilterValueDateWrapper = function (_a) {
    var children = _a.children;
    var calendar = "jalali";
    return (React.createElement(MuiPickersUtilsProvider, { utils: calendar === "jalali" ? DateFnsUtils : DateFnsUtils, locale: calendar === "jalali" ? "fa" : "en" }, children));
};
var FilterValueDate = function (_a) {
    var filterIndex = _a.filterIndex, valIndex = _a.valIndex, onSetFilter = _a.onSetFilter, value = _a.value, classes = _a.classes, label = _a.label;
    var handleChange = function (_) { return function (date) {
        if (!date)
            return;
        onSetFilter(filterIndex, valIndex, date.toISOString());
    }; };
    return (React.createElement(FilterValueDateWrapper, null,
        React.createElement(DatePicker, { disableToolbar: true, variant: "inline", format: "MM/dd/yyyy", margin: "normal", id: "date-picker-inline", value: value, className: classes === null || classes === void 0 ? void 0 : classes.root, key: "date-" + valIndex, onChange: handleChange(valIndex), 
            //   minDate={calMinDate}
            //   maxDate={calMaxDate}
            // showTodayButton={true}
            // okLabel={t("ok")}
            // cancelLabel={t("cancel")}
            // clearLabel={t("clear")}
            // todayLabel={t("today")}
            label: label, 
            // autoOk
            inputVariant: "standard", InputProps: { classes: { root: classes === null || classes === void 0 ? void 0 : classes.input } }, 
            //   format={calendar === "jalali" ? "jYYYY/jMM/jDD" : "DD MMM YYYY"}
            //   openTo={openTo ? openTo : "date"}
            animateYearScrolling: true })));
};
export default FilterValueDate;
