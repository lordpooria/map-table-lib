import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { VirtualTableContainerType } from "./VirtualTableContainerType";

const useStyles = makeStyles((theme) =>
  createStyles({
    vtContainerRoot: {
      margin: 10,
      borderRadius: 10,
      border: `solid 1px ${theme.palette.grey[300]}`,
      width: "100%",
    },
  })
);

const VirtualTableContainer = ({
  children,
  classes,
  width,
  direction,
}: VirtualTableContainerType) => {
  const containerClasses = useStyles();
  return (
    <div
      className={clsx(containerClasses.vtContainerRoot, classes?.root)}
      style={{ width, direction }}
    >
      {children}
    </div>
  );
};

export default VirtualTableContainer;
