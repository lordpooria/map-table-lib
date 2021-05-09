import React, { FC, memo, useCallback, useRef } from "react";
import { ListOnScrollProps, VariableSizeList } from "react-window";

import { useTableResizer } from "../hooks/useTableResizer";
import useTableData from "../hooks/useTableData";
import { TableToolbar } from "../toolbar/TableToolbar";
import { VirtualTableProps } from "../types/tableTypes";
import VirtualTableContainer from "./container-virtual/VirtualTableContainer";
import Overlay from "./overlay";
import VirtualList from "./container-virtual/VirtualList";

import { TablePagination } from "../footer/Pagination";
import { calcTableHeght } from "../utils/theme";
import { TableToolbarProvider } from "../toolbar/TableToolbarProvider";

/**
 * Decorator component that automatically adjusts the width and height of a single child
 */
const VirtualizaTable: FC<VirtualTableProps> = memo(
  ({
    rows,
    columns,
    width = "100%",
    height,
    hasFilter = true,
    hasToolbar = true,
    searchable = true,
    title,
    operationOnRows,
    classes,
    pagination,
    tableDataParser,
    VTContainerProps,
    VTToolbarProps,
    ...rest
  }: VirtualTableProps) => {
    useTableData(columns, rows, tableDataParser);
    const { setTableRef } = useTableResizer();
    const staticGrid = useRef<VariableSizeList | null | undefined>();
    const mainList = useRef<VariableSizeList | null | undefined>();

    const onScroll = useCallback(
      ({ scrollOffset, scrollUpdateWasRequested }: ListOnScrollProps) => {
        if (!scrollUpdateWasRequested && staticGrid.current) {
          staticGrid.current.scrollTo(scrollOffset);
        }
      },
      []
    );

    return (
      <VirtualTableContainer
        classes={classes?.table}
        {...VTContainerProps}
        width={width}
      >
        {hasToolbar && (
          <TableToolbarProvider>
            <TableToolbar
              title={title}
              operationOnRows={operationOnRows}
              classes={classes?.toolbar}
              hasFilter={hasFilter}
              searchable={searchable}
              {...VTToolbarProps}
            />
          </TableToolbarProvider>
        )}

        <div
          role="table"
          className={classes?.table?.container}
          style={{ display: "flex" }}
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
            ref={mainList}
            width={width}
            onScroll={onScroll}
            classes={classes}
            setTableRef={setTableRef}
            height={calcTableHeght(
              hasToolbar,
              VTToolbarProps?.height,
              pagination,
              height
            )}
            {...rest}
          />

          <Overlay />
        </div>

        {pagination && (
          <TablePagination
            {...pagination}
            classes={classes?.footer as any}
            width={width as any}
          />
        )}
      </VirtualTableContainer>
    );
  }
);

export default VirtualizaTable;
