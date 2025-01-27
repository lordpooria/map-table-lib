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
import { HeaderCellProps } from "../types/tableElements";
import { DividerIcon } from "@hesaba/assets";
import { useTableSizeState } from "../container/TableSizeProvider";

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
      fontFamily: "inherit",
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

  // currentWidths,
  classes,
  sticked,
  DividerProps,
  ...rest
}: HeaderCellProps) => {
  const cellClasses = useHeadStyles();
  const commonClasses = useCommonStyles();
  const { currentWidths } = useTableSizeState();

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
        <HeaderMenu
          index={colIndex}
          sortable={sortable}
          columnKey={colKey}
          sorted={sorted}
          sticked={sticked}
          dataField={rest["data-field"]}
        >
          <Typography
            align="center"
            className={clsx(cellClasses.titleText, classes?.title)}
          >
            {label}
          </Typography>
        </HeaderMenu>
      </div>

      {resizable && (
        <div className={clsx(DRAG_CLASS, cellClasses.dividerIconWrapper)}>
          <DividerIcon
            className={clsx(cellClasses.dividerIcon, classes?.divider)}
            {...DividerProps}
          />
        </div>
      )}
    </>
  );
};

export default HeadCell;
