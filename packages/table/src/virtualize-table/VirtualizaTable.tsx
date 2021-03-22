import React, { memo, useCallback, useRef } from "react";
import { ListOnScrollProps, VariableSizeList } from "react-window";

import { commonSidebar } from "../utils/themeConstants";

import { useTableResizer } from "../hooks/useTableResizer";
import useTableData from "../hooks/useTableData";
import { useTStoreState } from "../store/reducerHooks";
import TableToolbar from "@/toolbar/TableToolbar";
import { VirtualTableProps } from "../types/tableTypes";
import TableFilter from "../filter/VirtualTableFilter";
import VirtualTableContainer from "./container-virtual/VirtualTableContainer";
import CommonTablePagination from "@/pagination/CommonTablePagination";
import useStyles from "./resizableStyles";
import Overlay from "./overlay";
import VirtualList from "./container-virtual/VirtualList";

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

    const staticGrid = useRef<VariableSizeList | null>();

    const onScroll = useCallback(({ // scrollDirection,
      scrollOffset, scrollUpdateWasRequested }: ListOnScrollProps) => {
      if (!scrollUpdateWasRequested && staticGrid.current) {
        staticGrid.current.scrollTo(scrollOffset);
      }
    }, []);

    const visibleRows = useTStoreState((state) => state.visibleRows);
    const enhancedColumns = useTStoreState((state) => state.enhancedColumns);
    // const stickyColumns = useTStoreState((state) => state.stickyColumns);
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
        
        <div
          role="table"
          className={classes?.table?.container}
          style={{ display: "flex", height }}
        >
          <Overlay />
          {/* <VirtualList
           extraStyle={{zIndex:10,backgroundColor:"#FFF"}}
            ref={staticGrid}
            direction={direction}
            height={height-14}
            width={totalWidth2.current||48}
            rows={rows}
            columns={stickyColumns}
            onScroll={none}
            itemSize={itemSize}
            selectable={selectable}
            sortable={sortable}
            resizable={resizable}
            numRowsSelected={numRowsSelected}
            totalWidth={totalWidth2.current}
            currentWidths={currentWidths2.current}
            classes={classes}
            setTableRef={setTableRef2}
            tableClasses={tableClasses}
          /> */}

          <VirtualList
            direction={direction}
            height={height}
            width={width}
            rows={visibleRows}
            columns={visibleColumns}
            onScroll={onScroll}
            itemSize={itemSize}
            selectable={selectable}
            sortable={sortable}
            resizable={resizable}
            numRowsSelected={numRowsSelected}
            totalWidth={totalWidth.current}
            currentWidths={currentWidths.current}
            classes={classes}
            setTableRef={setTableRef}
            tableClasses={tableClasses}
          />
          {/* <List
            direction={direction}
            height={height}
            itemCount={rows.length}
            onScroll={onScroll}
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
                // selectable={selectable}
                totalWidth={totalWidth.current}
                currentWidths={currentWidths.current}
                columns={visibleColumns}
                rows={visibleRows}
                classes={classes?.row}
                {...rest}
              />
            )}
          </List> */}
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
