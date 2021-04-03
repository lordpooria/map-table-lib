import { createStyles, makeStyles } from "@material-ui/core";
import React, { memo } from "react";
import { useTDStoreState } from "../store";
import { LegendsProps } from "../types/legend";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: "absolute",
      bottom: 20,
      right: 20,
      zIndex: 999,
      backgroundColor: "#FFF",
      borderRadius: 5,
      border: `solid 1px ${theme.palette.grey["300"]}`,
    },
    indicatorBox: {
      border: `solid 2px ${theme.palette.grey["300"]}`,
      width: 10,
      height: 10,
      borderRadius: 1,
      margin: "0 4px",
    },
    itemContainer: { display: "flex", margin: 4 },
    text: {
      color: theme.palette.grey["400"],
      fontSize:11
    },
  })
);
const LegendComponent = () => {
  const users = useTDStoreState((state) => state.users);

  return <LegendStateLess users={users} />;
};

const LegendStateLess = memo(({ users }: LegendsProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {users &&
        Object.keys(users).map((k) => (
          <div key={k} className={classes.itemContainer}>
            <span className={classes.text}>{k}</span>
            <div
              className={classes.indicatorBox}
              style={{ backgroundColor: users[k] }}
            />
          </div>
        ))}
    </div>
  );
});

export default LegendComponent;
