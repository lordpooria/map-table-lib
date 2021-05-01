import { createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React, { memo } from "react";
import { useTDStoreState } from "../store";
import { PublicLegendProps, LegendsProps } from "../types/legend";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: "#FFF",
      borderRadius: 5,

      // border: `solid 1px ${theme.palette.grey["300"]}`,
    },
    itemContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: 4,
    },
    indicatorBox: {
      border: `solid 2px ${theme.palette.grey["300"]}`,
      width: 10,
      height: 10,
      borderRadius: 1,
      margin: "0 4px",
    },
    text: {
      color: theme.palette.grey["600"],
      fontSize: 11,
      margin: "4px 0",
    },
  })
);
const LegendContainer = ({ LegendComponent, classes }: PublicLegendProps) => {
  const legendClasses = useStyles();
  const users = useTDStoreState((state) => state.users);
  const currentData = useTDStoreState((state) => state.currentData);
  return (
    <div className={clsx(legendClasses.root, classes?.root)}>
      {LegendComponent ? (
        <LegendComponent
          properties={currentData?.features?.map((d) => d.properties)}
        />
      ) : (
        <LegendStateLess users={users} />
      )}
    </div>
  );
};

const LegendStateLess = memo(({ users, classes }: LegendsProps) => {
  const legendClasses = useStyles();
  return (
    <>
      {users &&
        Object.keys(users).map((k) => (
          <div
            key={k}
            className={clsx(legendClasses.itemContainer, classes?.item)}
          >
            <span className={clsx(legendClasses.text, classes?.item)}>{k}</span>
            <div
              className={clsx(
                legendClasses.indicatorBox,
                classes?.colorIndicator
              )}
              style={{ backgroundColor: users[k] }}
            />
          </div>
        ))}
    </>
  );
});

export default LegendContainer;
