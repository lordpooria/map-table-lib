import React, { memo } from "react";
import { VariableSizeList as List } from "react-window";

import { commonSidebar } from "../utils/themeConstants";

import { useTableResizer } from "../hooks/useTableResizer";
import useTableData from "../hooks/useTableData";
import VirtualTableRow from "./rows/VirtualTableRow";
import VirtualTableHeader from "./header/VirtualTableHeader";
import { useTStoreState } from "../store/reducerHooks";
import TableToolbar from "@/toolbar/TableToolbar";
import { VirtualTableProps } from "../types/tableTypes";
import TableFilter from "../filter/VirtualTableFilter";
import VirtualTableContainer from "./container/VirtualTableContainer";
import CommonTablePagination from "@/pagination/CommonTablePagination";
import useStyles from "./resizableStyles";
import Overlay from "./overlay";
import clsx from "clsx";

const VirtualizaTable = memo(
  ({
    rows,
    columns,
    selectable = false,
    height,
    width = "100%",
    resizable = false,
    hasFilter = true,
    title,
    sortable,
    operationOnRows,
    itemSize = () => commonSidebar.itemHeight,
    classes,
    direction,
    pagination,
    ...rest
  }: VirtualTableProps) => {
    const tableClasses = useStyles();
    useTableData(columns, rows);
    const { setTableRef, currentWidths, totalWidth } = useTableResizer(
      width,
      direction
    );

    const visibleRows = useTStoreState((state) => state.visibleRows);
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

    const innerElementType = ({
      children,
      style,
      ...rest
    }: {
      children: React.ReactNode;
      style: any;
    }) => (
      <div {...rest} style={{ ...style }}>
        <VirtualTableHeader
          selectable={selectable}
          sortable={sortable}
          currentWidths={currentWidths.current}
          columns={visibleColumns}
          resizable={resizable}
          isSelected={numRowsSelected !== 0}
          totalWidth={totalWidth.current}
          classes={classes?.header}
        />
        {children}
      </div>
    );

    return (
      <VirtualTableContainer
        classes={classes?.table}
        {...rest.VirtualTableContainerProps}
        width={width}
        direction={direction}
      >
        <TableToolbar
          title={title}
          numRowsSelected={numRowsSelected}
          columns={enhancedColumns}
          operationOnRows={operationOnRows}
          classes={classes?.toolbar}
          {...rest.VirtualToolbarProps}
        />
        {/* <div  style={{ width: totalWidth.current?totalWidth.current:'100%' }}
        id="MainVTWrapper"> */}
        {/* <VirtualTableHeader
            selectable={selectable}
            sortable={sortable}
            currentWidths={currentWidths.current}
            columns={visibleColumns}
            resizable={resizable}
            isSelected={numRowsSelected !== 0}
          /> */}
        <div role="table" className={classes?.table?.container}>
          <List
            direction={direction}
            height={height}
            itemCount={rows.length}
            // columnCount={1}
            itemSize={itemSize}
            // columnWidth={()=>100}
            itemKey={(index) => rows[index].name}
            width={width}
            itemData={rows}
            outerRef={setTableRef}
            innerElementType={innerElementType}
            className={clsx(tableClasses.root, classes?.table?.root)}
          >
            {({ index, ...rest }) => (
              <VirtualTableRow
              rowIndex={index}
                selectable={selectable}
                totalWidth={totalWidth.current}
                currentWidths={currentWidths.current}
                columns={visibleColumns}
                rows={visibleRows}
                classes={classes?.row}
                {...rest}
              />
            )}
          </List>
          <Overlay />
        </div>
        {/* </div> */}
        {hasFilter && <TableFilter />}
        {pagination && (
          <CommonTablePagination
            {...pagination}
            classes={classes?.footer}
            numRowsSelected={numRowsSelected}
            width={width}
          />
        )}
      </VirtualTableContainer>
    );
  }
);

export default VirtualizaTable;
