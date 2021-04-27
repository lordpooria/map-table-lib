import { createStyles, Typography, makeStyles } from "@material-ui/core";
import React from "react";

import { TableComponentProps, TableColumn } from "../types/main";
import clsx from "clsx";
import { DATA_FIELD } from "../utils/constants";
import { RESIZE_HANDLE_WIDTH, ROW_MIN_WIDTH } from "../utils/themeConstants";
import { CellClasses } from "../types/styles";
import { useTableSizeState } from "../container/TableSizeProvider";

const useCellStyles = makeStyles(() =>
  createStyles({
    rowCell: {},
    simpleCell: {
      fontFamily: "inherit",
    },
  })
);

const SimpleTableCell = ({ value, className }: TableComponentProps) => {
  const classes = useCellStyles();
  return (
    <Typography className={clsx(classes.simpleCell, className)}>
      {value}
    </Typography>
  );
};

interface Props extends TableColumn {
  row: any;
  rowIndex: number;
  colIndex: number;
  // currentWidths: CurrentWidths;
  columnsLength: number;
  colKey: string;
  classes?: CellClasses;
  isScrolling?: any;
}

const Cell = ({
  label,
  minWidth = ROW_MIN_WIDTH,
  colKey,
  CellComponent = SimpleTableCell,
  HeaderComponent,
  visible,
  sorted,
  row,
  rowIndex,
  colIndex,
  columnsLength,
  // currentWidths,
  classes,
  sticky,
  custom,
  isScrolling,
  ...rest
}: Props) => {
  const cellClasses = useCellStyles();

  // const handleW = colIndex === columnsLength - 1 ? 0 : RESIZE_HANDLE_WIDTH;
  const { currentWidths } = useTableSizeState();

  const calcMinWidth = currentWidths[rest[DATA_FIELD]]
    ? currentWidths[rest[DATA_FIELD]] + RESIZE_HANDLE_WIDTH
    : minWidth + RESIZE_HANDLE_WIDTH;
  const value =
    typeof row[colKey] === "object" ? row[colKey]?.value : row[colKey];

  return (
    <div
      {...rest}
      key={colKey}
      style={{
        minWidth: calcMinWidth || minWidth,
        width: calcMinWidth || minWidth,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "normal",
      }}
      className={clsx(
        // commonClasses.tableCell,
        cellClasses.rowCell,
        classes?.root
        // { [classes.evenRow]: index % 2 === 0 },
        // { [classes.oddRow]: index % 2 !== 0 }
      )}
    >
      <CellComponent
        label={label}
        index={rowIndex}
        rowKey={rowIndex}
        row={row}
        value={value}
        className={classes?.simpleCell}
      />
    </div>
  );
};

export default Cell;
