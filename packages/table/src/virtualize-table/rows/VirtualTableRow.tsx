import React, { memo, useCallback } from "react";
import clsx from "clsx";
import { Checkbox, createStyles, makeStyles } from "@material-ui/core";

import { useTStoreActions, useTStoreState } from "../../store/reducerHooks";
import Cell from "../../cell/Cell";
import { Fragment } from "react";
import { commonSidebar } from "../../utils/themeConstants";
import { HESABA_TABLE_ROW_CLASS } from "../../utils/constants";
import { CompleteRowProps } from "../../types/tableElements";
import useCommonStyles from "../../styles/commonStyles";
import { chooseClass, useCalcTableWidth } from "../../utils/helper";
import { useTableRowState } from "../../container/TableRowProvider";
import { TableColumn, TableRows } from "../../types";

type RowWrapperProps = CompleteRowProps & {
  visibleRows: TableRows;
};

type VirtualRowProps = RowWrapperProps & {
  getTooltipColumns: (key: string) => Array<TableColumn<any>>;
  getTooltipKeys: (key: string) => Array<string>;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    evenRow: {
      backgroundColor: "#f8f8f0",
    },
    oddRow: {},
    tableRow: {
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      marginTop: commonSidebar.itemHeight,
    },
    tableRowCommon: {
      borderBottom: `solid ${theme.palette.grey[300]} 1px`,
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.1)",
      },
    },
    rowCell: {},
    selected: { backgroundColor: "rgba(100,100,255,0.1)" },
    activatedRow: { backgroundColor: "rgba(255,100,255,0.1)" },
  })
);

export function VirtualTableRow(props: CompleteRowProps) {
  const visibleRows = useTStoreState((state) => state.visibleRows);
  const { getTooltipColumns, getTooltipKeys } = useTooltip();

  return (
    <>
      <SingleVirtualTableRow
        {...props}
        visibleRows={visibleRows}
        getTooltipColumns={getTooltipColumns}
        getTooltipKeys={getTooltipKeys}
      />
    </>
  );
}
export function VirtualStickyTableRow(props: CompleteRowProps) {
  const visibleRows = useTStoreState((state) => state.visibleRows);
  const { getTooltipColumns, getTooltipKeys } = useTooltip();
  return (
    <>
      <SingleStickyVirtualTableRow
        {...props}
        visibleRows={visibleRows}
        getTooltipColumns={getTooltipColumns}
        getTooltipKeys={getTooltipKeys}
      />
    </>
  );
}

function useTooltip() {
  const tooltipColumns = useTStoreState((state) => state.tooltipColumns);
  const tooltipKeys = useTStoreState((state) => state.tooltipKeys);
  const getTooltipColumns = useCallback((key: string) => {
    return tooltipColumns[key as any];
  }, []);
  const getTooltipKeys = useCallback((key: string) => {
    return tooltipKeys[key as any];
  }, []);
  return { getTooltipKeys, getTooltipColumns };
}

const RowWrapper = memo(
  ({
    children,
    style,
    extraStyles,
    selectedRowStyle,
    classes,
    onRowClick,
    rowIndex,
    width,
    visibleRows,
  }: RowWrapperProps & { children: React.ReactNode }) => {
    const rowClasses = useStyles();

    const { activeRow } = useTableRowState();
    const onRowSelect = useCallback(() => {
      onRowClick && onRowClick(rowIndex);
    }, [onRowClick]);
    return (
      <div
        style={{
          ...style,
          ...extraStyles,
          ...(activeRow === rowIndex && selectedRowStyle),
          width,
        }}
        className={clsx(
          HESABA_TABLE_ROW_CLASS,
          rowClasses.tableRow,
          chooseClass(rowClasses.tableRowCommon, classes?.root),
          { [rowClasses.selected]: visibleRows[rowIndex].selected },
          { [rowClasses.activatedRow]: activeRow === rowIndex },
          {
            [classes?.evenRow || "tempEvenRow"]:
              classes?.evenRow && rowIndex % 2 === 0,
          },
          {
            [classes?.oddRow || "tempOddRow"]:
              classes?.oddRow && rowIndex % 2 !== 0,
          }
        )}
        onClick={onRowSelect}
      >
        {children}
      </div>
    );
  }
);

const SingleVirtualTableRow = memo((props: VirtualRowProps) => {
  const commonClasses = useCommonStyles();

  const toggleSingleRow = useTStoreActions(
    (actions) => actions.toggleSingleRow
  );
  const calcRowWidth = useCalcTableWidth(props.columns, props.width);
  return (
    <RowWrapper
      {...props}
      width={calcRowWidth()}
      visibleRows={props.visibleRows}
    >
      {props.selectable && !props.withSticky && (
        <Checkbox
          checked={props.visibleRows[props.rowIndex].selected}
          onChange={() => {
            toggleSingleRow({ index: props.rowIndex });
          }}
          // name={name}
          color="primary"
          classes={{ root: commonClasses.checkbox }}
          onClick={(e) => e.stopPropagation()}
          {...props.CheckboxProps}
        />
      )}
      {props.columns.map((col, colIndex) => (
        <Fragment key={col.key}>
          <Cell
            {...col}
            colIndex={colIndex}
            row={props.visibleRows[props.rowIndex]}
            rowIndex={props.rowIndex}
            columnsLength={props.columns.length}
            colKey={col.key}
            tooltips={props.getTooltipColumns(col.key)}
            tooltipKeys={props.getTooltipKeys(col.key)}
          />
        </Fragment>
      ))}
    </RowWrapper>
  );
});

const SingleStickyVirtualTableRow = memo((props: VirtualRowProps) => {
  const commonClasses = useCommonStyles();

  const toggleSingleRow = useTStoreActions(
    (actions) => actions.toggleSingleRow
  );

  return (
    <RowWrapper
      {...props}
      width={"auto" as any}
      visibleRows={props.visibleRows}
    >
      {props.selectable && (
        <Checkbox
          checked={props.visibleRows[props.rowIndex].selected}
          onChange={() => {
            toggleSingleRow({ index: props.rowIndex });
          }}
          // name={name}
          color="primary"
          classes={{ root: commonClasses.checkbox }}
          onClick={(e) => e.stopPropagation()}
          {...props.CheckboxProps}
        />
      )}

      {props.columns.map((col, colIndex) => (
        <Fragment key={col.key}>
          <Cell
            {...col}
            colIndex={colIndex}
            row={props.visibleRows[props.rowIndex]}
            rowIndex={props.rowIndex}
            columnsLength={props.columns.length}
            colKey={col.key}
            tooltips={props.getTooltipColumns(col.key)}
            tooltipKeys={props.getTooltipKeys(col.key)}
          />
        </Fragment>
      ))}
    </RowWrapper>
  );
});
