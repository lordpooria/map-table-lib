import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { VirtualTableContainerType } from "../types-virtual/VirtualTableContainer";
import { useLanguageState } from "@hesaba/theme-language";

const useStyles = makeStyles((theme) =>
  createStyles({
    vtContainerRoot: {
      border: `solid 1px ${theme.palette.grey[300]}`,
      width: "100%",
    },
  })
);

const VirtualTableContainer = ({
  children,
  classes,
  width,
}: VirtualTableContainerType) => {
  const containerClasses = useStyles();
  const { direction } = useLanguageState();
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
