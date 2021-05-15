import {
  createStyles,
  Typography,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
import React, { forwardRef, Fragment, memo } from "react";

import { TableComponentProps, TooltipComponentProps } from "../types/main";
import clsx from "clsx";
import { DATA_FIELD } from "../utils/constants";
import { RESIZE_HANDLE_WIDTH, ROW_MIN_WIDTH } from "../utils/themeConstants";

import { useTableSizeState } from "../container/TableSizeProvider";
import { Info } from "@material-ui/icons";
import { pickObjectKeys } from "../utils/helper";
import { CompleteCellProps } from "../types";

const useCellStyles = makeStyles(() =>
  createStyles({
    rowCell: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "normal",
      position: "relative",
    },
    simpleCell: {
      fontFamily: "inherit",
    },
  })
);

const SimpleTableCell = ({ value, className }: TableComponentProps) => {
  const classes = useCellStyles();
  return (
    <Typography align="center" className={clsx(classes.simpleCell, className)}>
      {value}
    </Typography>
  );
};
const SimpleTooltipComponent = ({ tooltipData }: TooltipComponentProps) => {
  return (
    <div>
      {Object.keys(tooltipData).map((k) => (
        <Fragment key={k}>
          <Typography>
            {k}
            {" : "}
            {(tooltipData as any)[k]}
          </Typography>
          <br />
        </Fragment>
      ))}
    </div>
  );
};

const useTooltipCellStyles = makeStyles((theme) =>
  createStyles({
    tooltip: { position: "absolute", right: 0 },
    icon: { fill: theme.palette.secondary.light },
  })
);

const CellTooltip = memo(
  ({
    row,
    tooltipKeys,
    tooltips,
    TooltipComponent = SimpleTooltipComponent,
  }: {
    row: CompleteCellProps["row"];
    tooltipKeys: CompleteCellProps["tooltipKeys"];
    tooltips: CompleteCellProps["tooltips"];
    TooltipComponent: CompleteCellProps["TooltipComponent"];
  }) => {
    const classes = useTooltipCellStyles();
    if (
      tooltips &&
      tooltipKeys &&
      tooltipKeys?.length > 0 &&
      tooltips.length > 0
    ) {
      const tooltipData = pickObjectKeys(row, tooltipKeys);
      return (
        <Tooltip
          className={classes.tooltip}
          title={<TooltipComponent tooltipData={tooltipData} />}
        >
          <Info className={classes.icon} />
        </Tooltip>
      );
    }
    return null;
  }
);

const EnhancedCell = memo(
  ({ tooltips, tooltipKeys, TooltipComponent, ...rest }: CompleteCellProps) => {
    return (
      <Cell {...rest}>
        <CellTooltip
          row={rest.row}
          tooltipKeys={tooltipKeys}
          tooltips={tooltips}
          TooltipComponent={TooltipComponent}
        />
      </Cell>
    );
  }
);

const Cell = memo(
  forwardRef(
    (
      {
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
        children,
        // currentWidths,
        classes,
        sticked: sticky,
        custom,
        isScrolling,
        ...rest
      }: CompleteCellProps,
      ref
    ) => {
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
          ref={ref as any}
          {...rest}
          key={colKey}
          style={{
            minWidth: calcMinWidth || minWidth,
            width: calcMinWidth || minWidth,
          }}
          className={clsx(
            // commonClasses.tableCell,
            cellClasses.rowCell,
            classes?.root
            // { [classes.evenRow]: index % 2 === 0 },
            // { [classes.oddRow]: index % 2 !== 0 }
          )}
        >
          {children}
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
    }
  )
);

export default EnhancedCell;
