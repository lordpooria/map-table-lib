import { createStyles, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import clsx from "clsx";
import {
  DATA_FIELD,
  DRAG_CLASS,
  HESABA_TABLE_HEADER_CLASS,
} from "../utils/constants";
import { RESIZE_HANDLE_WIDTH, ROW_MIN_WIDTH } from "../utils/themeConstants";
import HeaderMenu from "../virtualize-table/header/HeaderMenu";
import useCommonStyles from "../styles/commonStyles";
import { HeaderCellProps } from "@/types/tableElements";
import DividerIcon from "@/assets/icons/common/DividerIcon";

const useHeadStyles = makeStyles((theme) =>
  createStyles({
    columnContainer: {
      display: "flex",
      top: 0,
      left: 0,
      position: "sticky",
      zIndex: 2,
      backgroundColor: "rgba(255,255,255,0.8)",
      alignItems: "center",
      borderBottom: `solid ${theme.palette.grey[300]} 1px`,
    },
    titleText: {
      flex: 1,
    },
    dividerIcon: {
      pointerEvents: "none",
      display: "inline-block",
      // width: 1.5,
      // height: "100%",
      // backgroundColor: "#444",
      width: RESIZE_HANDLE_WIDTH,
      height: RESIZE_HANDLE_WIDTH,
    },
    dividerIconWrapper: {
      cursor: "col-resize",

      opacity: 0.4,
      "&:hover": {
        opacity: 1,
      },
    },
  })
);

const HeadCell = ({
  minWidth = ROW_MIN_WIDTH,
  label,
  colKey,
  CellComponent,
  HeaderComponent,
  visible,
  sorted,
  sortable,
  resizable,
  colIndex,
  currentWidths,
  classes,
  sticky,
  ...rest
}: HeaderCellProps) => {
  const cellClasses = useHeadStyles();
  const commonClasses = useCommonStyles();
  // const setStickyColumn = useStoreActions((actions) => actions.setStickyColumn);
  const calcMinWidth = currentWidths[rest[DATA_FIELD]]
    ? currentWidths[rest[DATA_FIELD]]
    : minWidth;

  return (
    <>
      <div
        className={clsx(
          commonClasses.tableCell,
          HESABA_TABLE_HEADER_CLASS,
          classes?.root
        )}
        style={{
          minWidth: calcMinWidth || minWidth,
          width: calcMinWidth || minWidth,
        }}
        {...rest}
      >
        <>
          <Typography
            align="left"
            className={clsx(cellClasses.titleText, classes?.title)}
          >
            {label}
          </Typography>
          <HeaderMenu
            index={colIndex}
            sortable={sortable}
            columnKey={colKey}
            sorted={sorted}
          />
        </>
      </div>

      {resizable && (
        <div className={clsx(DRAG_CLASS, cellClasses.dividerIconWrapper)}>
          {/* <span className={clsx(cellClasses.dividerIcon, classes?.divider)} /> */}
          <DividerIcon
            className={clsx(cellClasses.dividerIcon, classes?.divider)}
          />
        </div>
      )}
    </>
  );
};

export default HeadCell;
