import { createStyles, makeStyles } from "@material-ui/core";
var useStyles = makeStyles(function () {
    return createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            zIndex: 1000,
            top: 20,
            right: 20,
        },
        clockWrapper: {
            position: "relative",
        },
        amPm: {
            fontSize: 12,
            fontWeight: 800,
            padding: 4,
            // backgroundColor: "#555",
            color: "#444",
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translate(-50%)",
            fontFamily: "inherit",
        },
        dateWrapper: {
            backgroundColor: "#FFF",
            marginTop: 8,
            padding: "0 4px",
            borderRadius: "99em",
        },
        date: {
            padding: 4,
            margin: 0,
            fontFamily: "inherit",
        },
    });
});
export default useStyles;
