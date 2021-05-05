import React from "react";
import { createStyles, makeStyles, IconButton } from "@material-ui/core";
import { FilterColumn, FilterOperations, FilterValues } from "./FilterFields";
import { useTStoreActions } from "../../store/reducerHooks";
import TrashIcon from "../../assets/icons/common/TrashIcon";
// import CollapseVertical from "/assets/icons/CollapseVertical";
// import DeleteConfirm from "/components/actions/DeleteConfirm";
// import { UISchema } from "/models/graph";
// import { useDispatch } from "react-redux";
// import { filterDelete, filterSetName } from "../services/filterActions";
// import { useTranslation } from "/app/i18n";
// import SimpleWarning from "/components/info/SimpleWarning";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        deleteButton: {
        // display: "flex",
        // justifyContent: "flex-end",
        },
        inputs: { width: 150 },
        autoComplete: { margin: theme.spacing(1) },
    });
});
var FilterItem = function (_a) {
    var _b, _c;
    var filter = _a.filter, columns = _a.columns, index = _a.index;
    //   const [notExpanded, setExpanded] = useState<any>({});
    var t = function (v) { return v; };
    var classes = useStyles();
    var deleteFilter = useTStoreActions(function (actions) { return actions.filterDelete; });
    //   const dispatch = useDispatch();
    if (!((_b = filter === null || filter === void 0 ? void 0 : filter.column) === null || _b === void 0 ? void 0 : _b.length))
        return null;
    //   const { typedSchema, remainingSchema } = filteredSchema(filter, schema);
    //   const deleteWarning = `${t("deleteConfirmMsg")} filter ${filter.name}`;
    return (React.createElement(React.Fragment, null,
        React.createElement(IconButton, { size: "small", className: classes.deleteButton, onClick: function () { return deleteFilter({ index: index }); } },
            React.createElement(TrashIcon, null)), filter === null || filter === void 0 ? void 0 :
        filter.column.map(function (column, columnIndex) {
            var _a;
            return (React.createElement(FilterColumn, { key: ((_a = filter === null || filter === void 0 ? void 0 : filter.column[0]) === null || _a === void 0 ? void 0 : _a.type) + "-" + columnIndex, filterIndex: index, value: column, columnIndex: columnIndex, columns: columns, classes: { root: classes.autoComplete, input: classes.inputs } }));
        }),
        React.createElement(FilterOperations, { columnType: (_c = filter === null || filter === void 0 ? void 0 : filter.column[0]) === null || _c === void 0 ? void 0 : _c.type, filterIndex: index, operation: filter.operation, classes: { root: classes.autoComplete, input: classes.inputs } }),
        filter.value.map(function (val, valIndex) {
            var _a, _b;
            return (React.createElement(FilterValues, { key: ((_a = filter === null || filter === void 0 ? void 0 : filter.column[0]) === null || _a === void 0 ? void 0 : _a.type) + "-" + valIndex, filterIndex: index, valIndex: valIndex, val: val, columnType: (_b = filter === null || filter === void 0 ? void 0 : filter.column[0]) === null || _b === void 0 ? void 0 : _b.type, label: t("value"), classes: { root: classes.autoComplete, input: classes.inputs } }));
        })));
};
export default FilterItem;
