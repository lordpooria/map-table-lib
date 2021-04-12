import React from "react";
import { Checkbox, createStyles, makeStyles } from "@material-ui/core";

import { commonSidebar, RESIZE_HANDLE_WIDTH } from "../../utils/themeConstants";
import { useTStoreActions } from "../../store/reducerHooks";

import HeadCell from "src/cell/HeadCell";
import { Fragment } from "react";
import { CommonHeaderProps } from "../../types/tableElements";

const useStyles = makeStyles((theme) =>
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

// interface Props {
//   selectable?: boolean;
//   resizable?: boolean;
//   sortable?: boolean;
//   isSelected: boolean;
//   currentWidths: CurrentWidths;
//   columns: TableColumns;
// }

const DataGridHeader = ({
  selectable,
  currentWidths,
  columns,
  resizable,
  sortable,
  isSelected,
  stickyColumns,
}: CommonHeaderProps) => {
  const classes = useStyles();

  const toggleAllRows = useTStoreActions((actions) => actions.toggleAllRows);

  return (
    <div
      style={{ height: commonSidebar.itemHeight }}
      className={classes.columnContainer}
    >
      <div style={{ position: "sticky", left: 0, display: "flex" }}>
        {selectable && (
          <Checkbox
            checked={isSelected}
            onChange={() => {
              toggleAllRows({ isSelected });
            }}
            // name={name}
            color="primary"
            style={{ position: "sticky", left: 0 }}
          />
        )}

        {stickyColumns &&
          stickyColumns.map((props, idx) => (
            <Fragment key={props.key}>
              <HeadCell
                {...props}
                colIndex={idx}
                currentWidths={currentWidths}
                resizable={resizable}
                sortable={sortable}
                colKey={props.key}
              />
            </Fragment>
          ))}
      </div>

      {columns.map((props, index) => (
        <Fragment key={props.key}>
          <HeadCell
            {...props}
            colIndex={index}
            colKey={props.key}
            resizable={resizable}
            sortable={sortable}
            currentWidths={currentWidths}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default DataGridHeader;
