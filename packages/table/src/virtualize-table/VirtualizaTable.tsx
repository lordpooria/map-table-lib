import React, { FC, memo, useCallback, useRef } from "react";
import { ListOnScrollProps, VariableSizeList } from "react-window";

import useTableData from "../hooks/useTableData";
import { TableToolbar } from "../toolbar/TableToolbar";
import { VirtualTableProps } from "../types/tableTypes";
import VirtualTableContainer from "./container-virtual/VirtualTableContainer";
import Overlay from "./overlay";
import {
  VirtualList,
  StickyVirtualList,
} from "./container-virtual/VirtualList";

import { TablePagination } from "../footer/Pagination";
import { calcTableHeght } from "../utils/theme";
import { TableToolbarProvider } from "../toolbar/TableToolbarProvider";
import { CHECKBOX_WIDTH } from "../utils/themeConstants";

/**
 * Decorator component that automatically adjusts the width and height of a single child
 */
const VirtualizaTable: FC<VirtualTableProps> = memo(
  ({
    rows,
    columns,
    width,
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
    headerHeight,
    onFilterChange,
    onSearchTextChange,
    ...rest
  }: VirtualTableProps) => {
    useTableData(columns, rows, tableDataParser);

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
    const onStickyScroll = useCallback(
      ({ scrollOffset, scrollUpdateWasRequested }: ListOnScrollProps) => {
        if (!scrollUpdateWasRequested && mainList.current) {
          mainList.current.scrollTo(scrollOffset);
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
              onSearchTextChange={onSearchTextChange}
              onFilterChange={onFilterChange}
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

          {rest.withSticky && (
            <StickyVirtualList
              ref={staticGrid}
              width={CHECKBOX_WIDTH}
              onScroll={onStickyScroll}
              height={
                calcTableHeght(
                  hasToolbar,
                  VTToolbarProps?.height,
                  pagination,
                  height
                ) - 13
              }
              {...rest}
            />
          )}

          <VirtualList
            ref={mainList}
            width={width}
            onScroll={onScroll}
            classes={classes}
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
