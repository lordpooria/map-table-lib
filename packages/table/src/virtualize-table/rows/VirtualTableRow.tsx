import React from "react";
import clsx from "clsx";
import { Checkbox, createStyles, makeStyles } from "@material-ui/core";

import { useTStoreActions } from "../../store/reducerHooks";
import Cell from "../../cell/Cell";
import { Fragment } from "react";
import { commonSidebar } from "../../utils/themeConstants";
import { HESABA_TABLE_ROW_CLASS } from "../../utils/constants";
import { CommonTableRowProps } from "@/types/tableElements";
import useCommonStyles from "../../styles/commonStyles";
import { calcRowWidth } from "@/utils/helper";
import { useTableSizeState } from "@/container/TableSizeProvider";

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

export function VirtualTableRow(props: CommonTableRowProps) {
  return (
    <>
      <SingleVirtualTableRow {...props} />
    </>
  );
}

const SingleVirtualTableRow = ({
  style,
  rowIndex,
  // totalWidth,
  selectable,
  columns,
  rows,
  classes,
  ...rest
}: CommonTableRowProps) => {
  const rowClasses = useStyles();
  const commonClasses = useCommonStyles();

  const toggleSingleRow = useTStoreActions(
    (actions) => actions.toggleSingleRow
  );

  const { totalWidth } = useTableSizeState();

  return (
    <div
      style={{
        ...style,
        width: calcRowWidth(totalWidth, columns),
        overflow: "hidden",
        marginTop: commonSidebar.itemHeight,
      }}
      className={clsx(
        HESABA_TABLE_ROW_CLASS,
        rowClasses.tableRow,
        classes?.root,
        { [rowClasses.selected]: rows[rowIndex].selected },
        {
          [classes?.evenRow || "tempEvenRow"]:
            classes?.evenRow && rowIndex % 2 === 0,
        },
        {
          [classes?.oddRow || "tempOddRow"]:
            classes?.oddRow && rowIndex % 2 !== 0,
        }
      )}
    >
      {selectable && (
        <Checkbox
          checked={rows[rowIndex].selected}
          onChange={() => {
            toggleSingleRow({ index: rowIndex });
          }}
          // name={name}
          color="primary"
          classes={{ root: commonClasses.checkbox }}
        />
      )}

      {columns.map((props, colIndex) => (
        <Fragment key={props.key}>
          <Cell
            {...props}
            {...rest}
            colIndex={colIndex}
            row={rows[rowIndex]}
            rowIndex={rowIndex}
            columnsLength={columns.length}
            colKey={props.key}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default VirtualTableRow;
