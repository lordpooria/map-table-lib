import React, { useCallback } from "react";
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

const useStyles = makeStyles((theme) =>
  createStyles({
    evenRow: {
      backgroundColor: "#f8f8f0",
    },
    oddRow: {},
    tableRow: {
      display: "flex",
      alignItems: "center",
    },
    tableRowCommon: {
      borderBottom: `solid ${theme.palette.grey[300]} 1px`,
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.1)",
      },
    },
    rowCell: {},
    selected: {
      backgroundColor: "rgba(100,100,255,0.1)",
    },
    activatedRow: { backgroundColor: "rgba(255,100,255,0.1)" },
  })
);

export function VirtualTableRow(props: CompleteRowProps) {
  return (
    <>
      <SingleVirtualTableRow {...props} />
    </>
  );
}

const SingleVirtualTableRow = ({
  style,
  rowIndex,
  selectable,
  classes,
  width,
  CheckboxProps,
  onRowClick,
  extraStyles,
  ...rest
}: CompleteRowProps) => {
  const rowClasses = useStyles();
  const commonClasses = useCommonStyles();
  const visibleColumns = useTStoreState((state) => state.visibleColumns);
  const visibleRows = useTStoreState((state) => state.visibleRows);
  const toggleSingleRow = useTStoreActions(
    (actions) => actions.toggleSingleRow
  );
  const calcRowWidth = useCalcTableWidth(visibleColumns, width);
  const { activeRow } = useTableRowState();
  const onRowSelect = useCallback(() => {
    onRowClick && onRowClick(rowIndex);
  }, [onRowClick]);
  return (
    <div
      style={{
        ...style,
        extraStyles,
        width: calcRowWidth(),
        overflow: "hidden",
        marginTop: commonSidebar.itemHeight,
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
      {selectable && (
        <Checkbox
          checked={visibleRows[rowIndex].selected}
          onChange={() => {
            toggleSingleRow({ index: rowIndex });
          }}
          // name={name}
          color="primary"
          classes={{ root: commonClasses.checkbox }}
          onClick={(e) => e.stopPropagation()}
          {...CheckboxProps}
        />
      )}

      {visibleColumns.map((props, colIndex) => (
        <Fragment key={props.key}>
          <Cell
            {...props}
            {...rest}
            colIndex={colIndex}
            row={visibleRows[rowIndex]}
            rowIndex={rowIndex}
            columnsLength={visibleColumns.length}
            colKey={props.key}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default VirtualTableRow;
