import React from "react";
import { Checkbox, createStyles, makeStyles } from "@material-ui/core";

import { commonSidebar, RESIZE_HANDLE_WIDTH } from "../../utils/themeConstants";

import { Fragment } from "react";
import { useTStoreActions, useTStoreState } from "../../store/reducerHooks";

import HeadCell from "../../cell/HeadCell";
import { HESABA_TABLE_ROW_CLASS } from "../../utils/constants";
import clsx from "clsx";
import useCommonStyles from "../../styles/commonStyles";

import { CompleteHeadProps } from "../../types/tableElements";
import { useCalcTableWidth } from "../../utils/helper";

const useStyles = makeStyles((theme) =>
  createStyles({
    headerContainer: {
      display: "flex",
      // flexDirection: theme.direction === "rtl" ? "row-reverse" : "row",
      top: 0,
      left: 0,
      position: "sticky",
      zIndex: 2,
      backgroundColor: "rgba(255,255,255,0.8)",
      alignItems: "center",
      // justifyContent: "center",
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

const VirtualTableHeader = ({
  selectable,

  isSelected,
  // totalWidth,
  classes,
  width,
  CheckboxProps,

  ...rest
}: CompleteHeadProps) => {
  const tableClasses = useStyles();
  // const commonClasses = useCommonStyles();
  const commonClasses = useCommonStyles();
  const visibleColumns = useTStoreState((state) => state.visibleColumns);
  const toggleAllRows = useTStoreActions((actions) => actions.toggleAllRows);
  const calcRowWidth = useCalcTableWidth(visibleColumns, width);
  return (
    <div
      style={{
        height: commonSidebar.itemHeight,
        width: calcRowWidth(),
      }}
      className={clsx(
        HESABA_TABLE_ROW_CLASS,
        tableClasses.headerContainer,
        classes?.root
      )}
    >
      {selectable && (
        <Checkbox
          className={clsx("HESABA_TABLE_HEADER_CLASS")}
          checked={isSelected}
          onChange={() => {
            toggleAllRows({ isSelected });
          }}
          color="primary"
          classes={{ root: commonClasses.checkbox }}
          {...CheckboxProps}
        />
      )}

      {visibleColumns.map((props, index) => (
        <Fragment key={props.key}>
          <HeadCell
            {...props}
            {...rest}
            colIndex={index}
            colKey={props.key}
            classes={classes?.cell}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default VirtualTableHeader;
