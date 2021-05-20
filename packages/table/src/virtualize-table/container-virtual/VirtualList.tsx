import React, { forwardRef, memo } from "react";
import { VariableSizeList as List } from "react-window";

import {
  VirtualTableRow,
  VirtualStickyTableRow,
} from "../rows/VirtualTableRow";
import {
  VirtualTableHeader,
  VirtualTableStickyHeader,
} from "../header/VirtualTableHeader";

import clsx from "clsx";
import { CompleteMainListProps } from "../../types";
import { useTStoreState } from "../../store/reducerHooks";
import { useLanguageState } from "@hesaba/theme-language";
// import { Scrollbars } from "react-custom-scrollbars";

import { MAIN_LIST_ID, MAIN_STICKY_LIST_ID } from "../../utils/constants";
import { makeStyles } from "@material-ui/core";
import {
  useStickyTableResizer,
  useTableResizer,
} from "../../hooks/useTableResizer";

const useStyles = makeStyles(() => ({
  root: {},
  stickyTable: {
    zIndex: 10,
    backgroundColor: "#FFF",
    overflowY: "hidden",
    border: "solid  #ddd",
    borderWidth: "0 0 1px 3px",
  },
}));

const outerElementTypeWithId = forwardRef((props: any, ref) => {
  return <div id={MAIN_LIST_ID} {...props} ref={ref as any} />;
});
const stickyOuterElementTypeWithId = forwardRef((props: any, ref) => {
  const classes = useStyles();
  return (
    <div
      id={MAIN_STICKY_LIST_ID}
      {...props}
      className={classes.stickyTable}
      ref={ref as any}
      style={{ ...props.style, overflow: "hidden" }}
    />
  );
});

export const VirtualList = memo(
  forwardRef(
    (
      {
        height,
        width,
        classes,
        onScroll,
        itemSize = 50,
        resizable,
        sortable,
        withSticky,
        selectable,
        VTCommonTableElProps,
        VTRowProps,
        VTFilterProps,
        VTHeaderProps,
      }: CompleteMainListProps,
      ref
    ) => {
      const { direction } = useLanguageState();
      const { setRef } = useTableResizer();

      const visibleColumns = useTStoreState((state) => state.visibleColumns);

      const visibleRows = useTStoreState((state) => state.visibleRows);
      const tableClasses = useStyles();
      if (!visibleRows || visibleRows.length === 0) {
        return null;
      }

      // const [rowSizes, setRowSizes] = useState(
      //   new Array(rows.length).fill(true).reduce((acc, item, i) => {
      //     acc[i] = 50;
      //     return acc;
      //   }, {})
      // );

      // function toggleSize(i: number) {
      //   if (ref) {
      //     (ref as any).resetAfterIndex(i);
      //   }
      //   setRowSizes((prevState: any) => ({
      //     ...prevState.rowSizes,
      //     [i]: prevState.rowSizes[i] === 50 ? 75 : 50,
      //   }));
      // }

      // function getSize(i: number) {
      //   return rowSizes[i];
      // }

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
            classes={classes?.header}
            width={width}
            resizable={resizable}
            withSticky={withSticky}
            selectable={selectable}
            sortable={sortable}
            columns={visibleColumns}
            {...VTCommonTableElProps}
            {...VTHeaderProps}
            {...VTFilterProps}
          />

          {children}
        </div>
      );

      return (
        <List
          ref={ref as any}
          direction={direction}
          height={height}
          itemCount={visibleRows.length}
          onScroll={onScroll}
          itemSize={() => itemSize}
          itemKey={(index) => `${index}` as string}
          width={width}
          itemData={visibleRows}
          outerRef={setRef}
          innerElementType={innerElementType}
          className={clsx(tableClasses.root, classes?.table?.root)}
          outerElementType={outerElementTypeWithId}
        >
          {({ index, ...rest }) => (
            <VirtualTableRow
              rowIndex={index}
              classes={classes?.row}
              width={width}
              columns={visibleColumns}
              withSticky={withSticky}
              {...VTCommonTableElProps}
              {...VTRowProps}
              {...rest}
              selectable={selectable}
            />
          )}
        </List>
      );
    }
  )
);
export const StickyVirtualList = memo(
  forwardRef(
    (
      {
        height,
        width,
        tableWidth,
        classes,
        onScroll,
        selectable = false,
        itemSize = 50,
        resizable,
        sortable,
        VTCommonTableElProps,
        VTRowProps,
        VTFilterProps,
        VTHeaderProps,
      }: CompleteMainListProps&{tableWidth:number},
      ref
    ) => {
      const { direction } = useLanguageState();
      const { setRef } = useStickyTableResizer(tableWidth);

      const stickyColumns = useTStoreState((state) => state.stickyColumns);
      const visibleRows = useTStoreState((state) => state.visibleRows);
      const tableClasses = useStyles();
      if (!visibleRows || visibleRows.length === 0) {
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
        <div {...rest} style={{ ...style }} onWheel={onScroll}>
          <VirtualTableStickyHeader
            selectable={selectable}
            classes={classes?.header}
            width={width}
            resizable={resizable}
            sortable={sortable}
            columns={stickyColumns}
            {...VTCommonTableElProps}
            {...VTHeaderProps}
            {...VTFilterProps}
          />

          {children}
        </div>
      );

      return (
        <>
          <List
            ref={ref as any}
            direction={direction}
            height={height}
            itemCount={visibleRows.length}
            // onScroll={onScroll}
            itemSize={() => itemSize}
            itemKey={(index) => `${index}`}
            width={width}
            itemData={visibleRows}
            outerRef={setRef}
            className={clsx(tableClasses?.root, classes?.table?.root)}
            innerElementType={innerElementType}
            outerElementType={stickyOuterElementTypeWithId}
          >
            {({ index, ...rest }) => (
              <VirtualStickyTableRow
                rowIndex={index}
                selectable={selectable}
                classes={classes?.row}
                width={width}
                columns={stickyColumns}
                {...VTCommonTableElProps}
                {...VTRowProps}
                {...rest}
              />
            )}
          </List>
        </>
      );
    }
  )
);
