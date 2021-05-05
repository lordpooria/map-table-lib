import { createStyles, makeStyles } from "@material-ui/core";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        panelClasses: {},
        tdRoot: {
            height: "100%",
            width: "100%",
        },
        mapRoot: {
            width: "95vw",
            height: "95vh",
            border: " 1px solid black",
            position: "relative",
        },
        tdRootWithTable: {
            borderRadius: theme.shape.borderRadius * 2,
            boxShadow: "0 0 5px #444",
            overflow: "hidden",
        },
        mapRootWithTable: {
            flex: 1,
            height: "100%",
            position: "relative",
            borderTopLeftRadius: theme.shape.borderRadius * 2,
            borderBottomLeftRadius: theme.shape.borderRadius * 2,
        },
        tableRoot: {
            flex: 1,
            borderTopRightRadius: theme.shape.borderRadius * 2,
            overflow: "hidden",
        },
    });
});
export default useStyles;
