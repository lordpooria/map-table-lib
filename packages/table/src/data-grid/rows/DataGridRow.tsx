import React from "react";
import { useTStoreActions } from "../../store/reducerHooks";
import { Checkbox, createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";

import { Fragment } from "react";
import { commonSidebar } from "../../utils/themeConstants";
import Cell from "../../cell/Cell";
import { CommonTableRowProps } from "../../types/tableElements";

const useStyles = makeStyles((theme) =>
  createStyles({
    evenRow: {
      backgroundColor: "#f8f8f0",
    },
    oddRow: {},
    tableRow: {
      display: "flex",
      alignItems: "center",
      borderBottom: `solid ${theme.palette.grey[300]} 1px`,
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.1)",
      },
    },
    rowCell: {},
    selected: {
      backgroundColor: "rgba(100,100,255,0.1)",
    },
  })
);

const DataGridRow = ({
  style,
  rowIndex,
  totalWidth,
  selectable,
  currentWidths,
  columns,
  rows,
  classes,
  stickyColumns,
}: CommonTableRowProps) => {
  const rowClasses = useStyles();

  const toggleSingleRow = useTStoreActions(
    (actions) => actions.toggleSingleRow
  );
  return (
    <div
      style={{
        ...style,
        width: totalWidth ? totalWidth : "100%",
        marginTop: commonSidebar.itemHeight,
      }}
      key={rows[rowIndex].name}
      className={clsx(
        rowClasses.tableRow,
        classes?.root,
        { [rowClasses.selected]: rows[rowIndex].selected }
        // { [classes.evenRow]: index % 2 === 0 },
        // { [classes.oddRow]: index % 2 !== 0 }
      )}
    >
      <div style={{ position: "sticky", left: 0, display: "flex" }}>
        {selectable && (
          <Checkbox
            checked={rows[rowIndex].selected}
            onChange={() => {
              toggleSingleRow({ index: rowIndex });
            }}
            // name={name}
            color="primary"
            style={{ position: "sticky", left: 0 }}
          />
        )}

        {stickyColumns &&
          stickyColumns.map((props, colIndex) => {
            return (
              <Fragment key={props.key}>
                <Cell
                  {...props}
                  colIndex={colIndex}
                  rowIndex={rowIndex}
                  columnsLength={columns.length}
                  row={rows[rowIndex]}
                  currentWidths={currentWidths}
                  colKey={props.key}
                />
              </Fragment>
            );
          })}
      </div>
      {columns.map((props, idx) => (
        <Fragment key={props.key}>
          <Cell
            {...props}
            colIndex={idx}
            rowIndex={rowIndex}
            columnsLength={columns.length}
            row={rows[rowIndex]}
            currentWidths={currentWidths}
            colKey={props.key}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default DataGridRow;
