import { createStyles, makeStyles } from "@material-ui/core";
var ICON_SIZE = 0.75;
var useStyles = makeStyles(function (theme) {
    return createStyles({
        commonPlayerRoot: {
            display: "flex",
            flexWrap: "wrap",
            maxWidth: 700,
            minWidth: 200,
            alignItems: "center",
            justifyContent: "space-between",
            padding: "4px 16px",
            marginRight: 32,
            marginTop: 16,
            borderRadius: "50em",
            backgroundColor: "#fff",
        },
        playerRoot: {
            padding: "4px 16px",
            borderRadius: "50em",
            backgroundColor: "#fff",
        },
        iconContainer: {
            display: "flex",
        },
        playerSlider: {
            flex: 3,
            display: "flex",
            margin: "0 16px",
            alignItems: "center",
        },
        speedSlider: {
            flex: 1,
            display: "flex",
            alignItems: "center",
            minWidth: 50,
        },
        controller: {
            display: "flex",
            alignItems: "center",
        },
        icon: {
            width: ICON_SIZE + "em",
            height: ICON_SIZE + "em",
            fill: "" + theme.palette.primary.main,
        },
        playIcon: {
            width: ICON_SIZE + "em",
            height: ICON_SIZE + "em",
            borderRadius: "0.5em",
            border: "solid 2px " + theme.palette.primary.main,
        },
        marginIcon: {
            margin: "0 4px",
        },
    });
});
export default useStyles;
