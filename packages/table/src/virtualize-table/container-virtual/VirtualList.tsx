import React, { forwardRef, memo } from "react";
import { VariableSizeList as List } from "react-window";

import VirtualTableRow from "../rows/VirtualTableRow";
import VirtualTableHeader from "../header/VirtualTableHeader";

import clsx from "clsx";

// interface Props {}

const VirtualList = memo(
  forwardRef(
    (
      {
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
        extraStyle
      }: any,
      ref
    ) => {
      const innerElementType = ({
        children,
        style,
        ...rest
      }: {
        children: React.ReactNode;
        style: any;
      }) => (
        <div {...rest} style={{ ...style, ...extraStyle }}>
          <VirtualTableHeader
            selectable={selectable}
            sortable={sortable}
            currentWidths={currentWidths}
            columns={columns}
            resizable={resizable}
            isSelected={numRowsSelected !== 0}
            totalWidth={totalWidth}
            classes={classes?.header}
            // placeholderColumns={placeholderColumns}
            // placeholderTotalWidth={placeholderTotalWidth}
            // placeholderCurrentWidths={placeholderCurrentWidths}
          />
          {children}
        </div>
      );

      return (
        <List
          style={{ position: "absolute", ...extraStyle }}
          ref={ref as any}
          direction={direction}
          height={height}
          itemCount={rows.length}
          onScroll={onScroll}
          
          itemSize={itemSize}
          
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
              totalWidth={totalWidth}
              currentWidths={currentWidths}
              columns={columns}
              rows={rows}
              classes={classes?.row}
              {...rest}
              // placeholderColumns={placeholderColumns}
              // placeholderTotalWidth={placeholderTotalWidth}
              // placeholderCurrentWidths={placeholderCurrentWidths}
            />
          )}
        </List>
      );
    }
  )
);

export default VirtualList;
