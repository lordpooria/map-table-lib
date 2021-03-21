import React from "react";
import { VariableSizeList as List } from "react-window";

import VirtualTableRow from "../rows/VirtualTableRow";
import VirtualTableHeader from "../header/VirtualTableHeader";

import clsx from "clsx";

// interface Props {}

const VirtualList = ({
  direction,
  height,
  rows,
  columns,
  onScroll,
  itemSize,
  width,
  selectable,
  sortable,
  resizable,
  numRowsSelected,
  totalWidth,
  currentWidths,
  classes,
  setTableRef,
  tableClasses,
}: any) => {
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
        currentWidths={currentWidths}
        columns={columns}
        resizable={resizable}
        isSelected={numRowsSelected !== 0}
        totalWidth={totalWidth}
        classes={classes?.header}
      />
      {children}
    </div>
  );

  return (
    <List
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
          totalWidth={totalWidth}
          currentWidths={currentWidths}
          columns={columns}
          rows={rows}
          classes={classes?.row}
          {...rest}
        />
      )}
    </List>
  );
};

export default VirtualList;
