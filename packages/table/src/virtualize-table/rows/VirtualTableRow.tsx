import React from "react";
import { Checkbox, createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";

import { useTStoreActions } from "../../store/reducerHooks";
import Cell from "../../cell/Cell";
import { Fragment } from "react";
import { commonSidebar } from "../../utils/themeConstants";
import { HESABA_TABLE_ROW_CLASS } from "../../utils/constants";
import { CommonTableRowType } from "@/types/tableElements";
import useCommonStyles from "../../styles/commonStyles";
import { calcRowWidth } from "@/utils/helper";

const useStyles = makeStyles((theme) =>
  createStyles({
    evenRow: {
      backgroundColor: "#f8f8f0",
    },
    oddRow: {},
    tableRow: {
      display: "flex",
      alignItems: "center",
      // flexDirection: theme.direction === "rtl" ? "row-reverse" : "row",
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

const VirtualTableRow = ({
  style,
  rowIndex,
  totalWidth,
  selectable,
  columns,
  rows,
  classes,
  ...rest
}: CommonTableRowType) => {
  const rowClasses = useStyles();
  const commonClasses = useCommonStyles();

  const toggleSingleRow = useTStoreActions(
    (actions) => actions.toggleSingleRow
  );
  
  return (
    <div
      style={{
        ...style,
        width: calcRowWidth(totalWidth, columns),
        overflow: "hidden",
        // alignItems: "stretch",
        // width: "100%",

        marginTop: commonSidebar.itemHeight,
      }}
      key={rows[rowIndex].name}
      className={clsx(
        HESABA_TABLE_ROW_CLASS,
        rowClasses.tableRow,
        classes?.root,
        { [rowClasses.selected]: rows[rowIndex].selected }
        // { [classes.evenRow]: index % 2 === 0 },
        // { [classes.oddRow]: index % 2 !== 0 }
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
