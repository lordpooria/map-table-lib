import { __assign, __rest } from "tslib";
import React from "react";
import { IconButton, Tooltip, withStyles, } from "@material-ui/core";
export var SmallIconButton = withStyles(function () { return ({
    root: { padding: "2px" },
}); })(IconButton);
export function ButtonTooltip(_a) {
    var title = _a.title, rest = __rest(_a, ["title"]);
    return (React.createElement(Tooltip, { title: title },
        React.createElement(SmallIconButton, __assign({}, rest))));
}
