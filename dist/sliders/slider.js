import { __assign } from "tslib";
import * as React from "react";
import { makeStyles, Tooltip } from "@material-ui/core";
export var useCommonSliderStyles = makeStyles(function (theme) { return ({
    root: {
        color: "" + theme.palette.secondary.main,
        height: 3,
        padding: "13px 0",
    },
    thumb: {
        height: 15,
        width: 15,
        borderRadius: 7.5,
        backgroundColor: "" + theme.palette.secondary.main,
        border: "1px solid currentColor",
        marginTop: -6,
        marginLeft: -3,
        // boxShadow: "#ebebeb 0 2px 2px",
        "&:focus, &:hover, &$active": {
            boxShadow: "#888 0 2px 3px 1px",
            height: 18,
            width: 18,
            borderRadius: 9,
            marginTop: -9,
            marginLeft: -3.5,
        },
        "& .bar": {
            // display: inline-block !important;
            height: 9,
            width: 1,
            backgroundColor: "#FFF",
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    track: {
        height: 6,
        bottom: 11,
    },
    rail: {
        color: "" + theme.palette.secondary.main,
        opacity: 1,
        height: 2,
    },
}); });
export var PlayerThumb = React.forwardRef(function (props, ref) {
    return (React.createElement("span", __assign({}, props, { ref: ref })));
});
export function ValueLabelComponent(props) {
    var children = props.children, open = props.open, value = props.value;
    return (React.createElement(Tooltip, { open: open, enterTouchDelay: 0, placement: "top", title: value }, children));
}
