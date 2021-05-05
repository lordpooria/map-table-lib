import React, { memo } from "react";
import clsx from "clsx";
import useStyles from "./styles/iconStyle";
var SvgIcon = memo(function (_a) {
    var className = _a.className, id = _a.id, children = _a.children, style = _a.style;
    var classes = useStyles();
    return (React.createElement("svg", { className: clsx(classes.root, className), style: style, id: id, width: "24", height: "24", viewBox: "0 0 24 24" }, children));
});
export default SvgIcon;
