import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useLanguageState } from "@hesaba/theme-language";
import { chooseClass } from "../../utils/helper";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        vtContainerRoot: { width: "100%" },
        commonVTContainer: { border: "solid 1px " + theme.palette.grey[300] },
    });
});
var VirtualTableContainer = function (_a) {
    var children = _a.children, classes = _a.classes, width = _a.width;
    var containerClasses = useStyles();
    var direction = useLanguageState().direction;
    return (React.createElement("div", { className: clsx(chooseClass(containerClasses.commonVTContainer, classes === null || classes === void 0 ? void 0 : classes.root), containerClasses.vtContainerRoot), style: { width: width, direction: direction } }, children));
};
export default VirtualTableContainer;
