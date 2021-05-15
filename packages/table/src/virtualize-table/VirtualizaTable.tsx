import React, { FC, memo } from "react";

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
import { useVTInit } from "./useInit";

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
    const {
      onScroll,
      onStickyScroll,
      staticGrid,
      mainList,
      scrollHeight,
    } = useVTInit(rows, columns, tableDataParser, rest.withSticky);

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
                ) - scrollHeight
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
