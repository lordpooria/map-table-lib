import React, { forwardRef, memo, useRef, useState } from "react";
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
        // totalWidth,
        // currentWidths,
        classes,
        setTableRef,
        tableClasses,
        extraStyle,
      }: any,
      ref
    ) => {
      const [rowSizes, setRowSizes] = useState(
        new Array(rows.length).fill(true).reduce((acc, item, i) => {
          acc[i] = 50;
          return acc;
        }, {})
      );

      function toggleSize(i: number) {
        if (ref) {
          (ref as any).resetAfterIndex(i);
        }
        setRowSizes((prevState) => ({
          ...prevState.rowSizes,
          [i]: prevState.rowSizes[i] === 50 ? 75 : 50,
        }));
      }

      function getSize(i: number) {
        return rowSizes[i];
      }

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
            columns={columns}
            resizable={resizable}
            isSelected={numRowsSelected !== 0}
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
          // style={{ position: "absolute", ...extraStyle }}
          ref={ref as any}
          direction={direction}
          height={height}
          itemCount={rows.length}
          onScroll={onScroll}
          itemSize={getSize}
          itemKey={(index) => rows[index].id}
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
              // totalWidth={totalWidth}
              // currentWidths={currentWidths}
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
