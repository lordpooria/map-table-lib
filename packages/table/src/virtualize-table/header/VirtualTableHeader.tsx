import React from "react";
import { Checkbox, createStyles, makeStyles } from "@material-ui/core";

import { commonSidebar, RESIZE_HANDLE_WIDTH } from "../../utils/themeConstants";

import { Fragment } from "react";
import { useTStoreActions } from "../../store/reducerHooks";

import HeadCell from "../../cell/HeadCell";
import { HESABA_TABLE_ROW_CLASS } from "../../utils/constants";
import clsx from "clsx";
import useCommonStyles from "../../styles/commonStyles";

import { CommonHeaderProps } from "@/types/tableElements";

const useStyles = makeStyles((theme) =>
  createStyles({
    columnContainer: {
      display: "flex",
      // flexDirection: theme.direction === "rtl" ? "row-reverse" : "row",
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

const VirtualTableHeader = ({
  selectable,
  columns,
  isSelected,
  totalWidth,
  classes,
  ...rest
}: CommonHeaderProps) => {
  const tableClasses = useStyles();
  // const commonClasses = useCommonStyles();
  const commonClasses = useCommonStyles();

  const toggleAllRows = useTStoreActions((actions) => actions.toggleAllRows);

  return (
    <div
      style={{ height: commonSidebar.itemHeight, width: totalWidth || "100%" }}
      className={clsx(
        HESABA_TABLE_ROW_CLASS,
        tableClasses.columnContainer,
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
          // name={name}
          color="primary"
          style={{position:"sticky",left:0}}
          classes={{ root: commonClasses.checkbox }}
        />
      )}
      {columns.map((props, index) => (
        <Fragment key={props.key}>
          <HeadCell
            {...props}
            {...rest}
            colIndex={index}
            colKey={props.key}
            classes={classes?.cell}
          />
          {/* <div
              className={clsx(
                commonClasses.tableCell,
                HESABA_TABLE_HEADER_CLASS
              )}
              style={{
                minWidth: currentWidths[rest[DATA_FIELD]]
                  ? currentWidths[rest[DATA_FIELD]]
                  : minWidth,
              }}
              {...rest}
            >
              {HeaderComponent ? (
                <HeaderComponent value={false} />
              ) : (
                <>
                  <Typography align="left" className={classes.titleText}>
                    {label}
                  </Typography>
                  <HeaderMenu
                    index={index}
                    sortable={sortable}
                    columnKey={key}
                    sorted={sorted}
                  />
                </>
              )}
            </div>

            {resizable && (
              <div className={clsx(DRAG_CLASS, classes.dividerIconWrapper)}>
                <DividerIcon className={classes.dividerIcon} />
              </div>
            )} */}
        </Fragment>
      ))}
    </div>
  );
};

export default VirtualTableHeader;
