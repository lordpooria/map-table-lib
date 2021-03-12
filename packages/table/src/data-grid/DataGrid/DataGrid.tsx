import React, { Fragment } from "react";

import { GridTableProps } from "@/types/tableTypes";
import DataGridProvider from "../../container/Wrapper";
import DataGridRow from "../rows/DataGridRow";
import { useTableResizer } from "../../hooks/useTableResizer";
import useTableData from "../../hooks/useTableData";
import { useTStoreState } from "../../store/reducerHooks";
import DataGridHeader from "../header/DataGridHeader";
import { Table } from "@material-ui/core";
import TableToolbar from "@/toolbar/TableToolbar";
import CommonTablePagination from "@/pagination/CommonTablePagination";

const DataGridComponent = ({
  rows,
  columns,
  direction = "ltr",
  width = "100%",
  operationOnRows,
  pagination,
  classes,
}: GridTableProps) => {
  const { setTableRef, currentWidths, totalWidth } = useTableResizer(
    width,
    direction
  );
  useTableData(columns, rows);

  const visibleRows = useTStoreState((state) => state.visibleRows);
  const stickyColumns = useTStoreState((state) => state.stickyColumns);
  const enhancedColumns = useTStoreState((state) => state.enhancedColumns);
  const visibleColumns = useTStoreState((state) => state.visibleColumns);
  const numRowsSelected = useTStoreState((state) => state.numRowsSelected);

  if (
    !visibleRows ||
    visibleRows.length === 0 ||
    !enhancedColumns ||
    enhancedColumns.length === 0
  ) {
    return null;
  }

  return (
    <Table ref={setTableRef}>
      <TableToolbar
        title={"title"}
        numRowsSelected={numRowsSelected}
        columns={enhancedColumns}
        operationOnRows={operationOnRows}
        // classes={classes?.toolbar}
        // {...rest.VirtualToolbarProps}
      />
      <DataGridHeader
        selectable={true}
        sortable={true}
        currentWidths={currentWidths.current}
        columns={visibleColumns}
        resizable={true}
        isSelected={numRowsSelected !== 0}
        stickyColumns={stickyColumns}
        totalWidth={totalWidth.current}
      />

      {rows.map((row, index) => (
        <Fragment key={row.id}>
          <DataGridRow
            style={{}}
            rowIndex={index}
            selectable={true}
            totalWidth={totalWidth.current}
            currentWidths={currentWidths.current}
            columns={visibleColumns}
            stickyColumns={stickyColumns}
            rows={visibleRows}
          />
        </Fragment>
      ))}
      {pagination && (
        <CommonTablePagination
          {...pagination}
          classes={classes?.footer}
          numRowsSelected={numRowsSelected}
          width={width}
        />
      )}
    </Table>
  );
};

const DataGrid = (props: GridTableProps) => {
  return (
    <DataGridProvider direction={props.direction || "ltr"}>
      <DataGridComponent {...props} />
    </DataGridProvider>
  );
};

export default DataGrid;
