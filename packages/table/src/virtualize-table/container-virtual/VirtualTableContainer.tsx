import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { VirtualTableContainerType } from "../types-virtual/VirtualTableContainer";
import { useLanguageState } from "@hesaba/theme-language";
import { chooseClass } from "../../utils/helper";

const useStyles = makeStyles((theme) =>
  createStyles({
    vtContainerRoot: { width: "100%" },
    commonVTContainer: { border: `solid 1px ${theme.palette.grey[300]}` },
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
      className={clsx(
        chooseClass(containerClasses.commonVTContainer, classes?.root),
        containerClasses.vtContainerRoot
      )}
      style={{ width, direction }}
    >
      {children}
    </div>
  );
};

export default VirtualTableContainer;
