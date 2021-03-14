import { createStyles, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import clsx from "clsx";
import {
  DATA_FIELD,
  DRAG_CLASS,
  HESABA_TABLE_HEADER_CLASS,
} from "../utils/constants";
import { RESIZE_HANDLE_WIDTH } from "../utils/themeConstants";
import HeaderMenu from "../virtualize-table/header/HeaderMenu";
import DividerIcon from "../assets/icons/common/DividerIcon";
import useCommonStyles from "../styles/commonStyles";
import { HeaderCellProps } from "@/types/tableElements";

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
  minWidth = 100,
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
  ...rest
}: HeaderCellProps) => {
  const cellClasses = useHeadStyles();
  const commonClasses = useCommonStyles();
  // const setStickyColumn = useStoreActions((actions) => actions.setStickyColumn);

  return (
    <>
      <div
        className={clsx(
          commonClasses.tableCell,
          HESABA_TABLE_HEADER_CLASS,
          classes?.root
        )}
        style={{
          minWidth: currentWidths[rest[DATA_FIELD]]
            ? currentWidths[rest[DATA_FIELD]]
            : minWidth,
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
          <DividerIcon
            className={clsx(cellClasses.dividerIcon, classes?.divider)}
          />
        </div>
      )}
    </>
  );
};

export default HeadCell;