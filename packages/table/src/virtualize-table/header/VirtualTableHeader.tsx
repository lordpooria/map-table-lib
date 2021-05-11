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
import { chooseClass, useCalcTableWidth } from "../../utils/helper";

const useStyles = makeStyles((theme) =>
  createStyles({
    headerContainer: {
      display: "flex",
      top: 0,
      position: "sticky",
      zIndex: 2,
      alignItems: "center",
    },
    commonHeaderContainer: {
      backgroundColor: "rgba(255,255,255,0.8)",
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

export const VirtualTableHeader = ({
  selectable,
  classes,
  width,
  columns,
  withSticky,
  CheckboxProps,
  headerHeight = commonSidebar.itemHeight,
  ...rest
}: CompleteHeadProps) => {
  const tableClasses = useStyles();
  const commonClasses = useCommonStyles();

  const calcRowWidth = useCalcTableWidth(columns, width);
  const numRowsSelected = useTStoreState((state) => state.numRowsSelected);

  const toggleAllRows = useTStoreActions((actions) => actions.toggleAllRows);

  return (
    <div
      style={{
        height: headerHeight,
        width: calcRowWidth() - RESIZE_HANDLE_WIDTH,
      }}
      className={clsx(
        HESABA_TABLE_ROW_CLASS,
        tableClasses.headerContainer,
        chooseClass(tableClasses.commonHeaderContainer, classes?.root)
      )}
    >
      {selectable && !withSticky && (
        <Checkbox
          className={clsx("HESABA_TABLE_HEADER_CLASS")}
          checked={numRowsSelected !== 0}
          onChange={() => {
            toggleAllRows({ isSelected: numRowsSelected !== 0 });
          }}
          color="primary"
          classes={{ root: commonClasses.checkbox }}
          {...CheckboxProps}
        />
      )}
      {columns.map((props) => (
        <Fragment key={props.key}>
          <HeadCell
            {...props}
            {...rest}
            colKey={props.key}
            classes={classes?.cell}
          />
        </Fragment>
      ))}
    </div>
  );
};

export const VirtualTableStickyHeader = ({
  selectable,
  columns,
  classes,
  width,
  CheckboxProps,
  headerHeight = commonSidebar.itemHeight,
  ...rest
}: CompleteHeadProps) => {
  const tableClasses = useStyles();
  // const commonClasses = useCommonStyles();
  const commonClasses = useCommonStyles();
  const numRowsSelected = useTStoreState((state) => state.numRowsSelected);

  const toggleAllRows = useTStoreActions((actions) => actions.toggleAllRows);

  return (
    <div
      style={{
        height: headerHeight,
      }}
      className={clsx(
        HESABA_TABLE_ROW_CLASS,
        tableClasses.headerContainer,
        chooseClass(tableClasses.commonHeaderContainer, classes?.root)
      )}
    >
      {selectable && (
        <Checkbox
          className={clsx("HESABA_TABLE_HEADER_CLASS")}
          checked={numRowsSelected !== 0}
          onChange={() => {
            toggleAllRows({ isSelected: numRowsSelected !== 0 });
          }}
          color="primary"
          classes={{ root: commonClasses.checkbox }}
          {...CheckboxProps}
        />
      )}

      {columns.map((props) => (
        <Fragment key={props.key}>
          <HeadCell
            {...props}
            {...rest}
            colKey={props.key}
            classes={classes?.cell}
          />
        </Fragment>
      ))}
    </div>
  );
};
