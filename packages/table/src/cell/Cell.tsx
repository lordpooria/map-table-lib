import { createStyles, Typography, makeStyles } from "@material-ui/core";
import React from "react";

import { TableComponentProps, TableColumn } from "../types";
import clsx from "clsx";
import { DATA_FIELD } from "../utils/constants";
import { RESIZE_HANDLE_WIDTH } from "../utils/themeConstants";
import { CurrentWidths } from "../types/useTableResizerType";
import { CellClasses } from "../types/styleType";

const SimpleTableCell = ({ value }: TableComponentProps) => {
  return <Typography>{value}</Typography>;
};

const useCellStyles = makeStyles(() =>
  createStyles({
    rowCell: {},
  })
);

interface Props extends TableColumn {
  row: any;
  rowIndex: number;
  colIndex: number;
  currentWidths: CurrentWidths;
  columnsLength: number;
  colKey: string;
  classes?: CellClasses;
}

const Cell = ({
  label,
  minWidth = 100,
  colKey,
  CellComponent = SimpleTableCell,
  HeaderComponent,
  visible,
  sorted,
  row,
  rowIndex,
  colIndex,
  columnsLength,
  currentWidths,
  classes,
  ...rest
}: Props) => {
  const cellClasses = useCellStyles();

  const handleW = colIndex === columnsLength - 1 ? 0 : RESIZE_HANDLE_WIDTH;
  const calcMinWidth = currentWidths[rest[DATA_FIELD]]
    ? currentWidths[rest[DATA_FIELD]] + handleW
    : minWidth + handleW;

  return (
    <div
      {...rest}
      key={colKey}
      style={{
        minWidth: 100,
        width: calcMinWidth || 100,
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
        value={row[colKey]}
      />
    </div>
  );
};

export default Cell;
