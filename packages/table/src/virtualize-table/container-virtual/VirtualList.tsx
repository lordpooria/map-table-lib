import React, { forwardRef, memo } from "react";
import { VariableSizeList as List } from "react-window";

import VirtualTableRow from "../rows/VirtualTableRow";
import VirtualTableHeader from "../header/VirtualTableHeader";

import clsx from "clsx";
import { CompleteMainListProps } from "../../types";
import { useTStoreState } from "../../store/reducerHooks";
import { commonSidebar } from "../../utils/themeConstants";
import { useLanguageState } from "@hesaba/theme-language";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
});

const VirtualList = memo(
  forwardRef(
    (
      {
        height,
        width,
        classes,
        onScroll,
        setTableRef,
        extraStyle,
        selectable = false,
        itemSize = () => commonSidebar.itemHeight,
        resizable,
        sortable,
        VTCommonTableElProps,
        VTRowProps,
        VTFilterProps,
        VTHeaderProps,
      }: CompleteMainListProps,
      ref
    ) => {
      const { direction } = useLanguageState();
      const visibleRows = useTStoreState((state) => state.visibleRows);
      const numRowsSelected = useTStoreState((state) => state.numRowsSelected);
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
        <div {...rest} style={{ ...style, ...extraStyle }}>
          <VirtualTableHeader
            selectable={selectable}
            isSelected={numRowsSelected !== 0}
            classes={classes?.header}
            width={width}
            resizable={resizable}
            sortable={sortable}
            {...VTCommonTableElProps}
            {...VTHeaderProps}
            {...VTFilterProps}
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
          itemCount={visibleRows.length}
          onScroll={onScroll}
          itemSize={itemSize}
          itemKey={(index) => visibleRows[index].id as string}
          width={width}
          itemData={visibleRows}
          outerRef={setTableRef}
          innerElementType={innerElementType}
          className={clsx(tableClasses.root, classes?.table?.root)}
        >
          {({ index, ...rest }) => (
            <VirtualTableRow
              rowIndex={index}
              selectable={selectable}
              classes={classes?.row}
              {...rest}
              width={width}
              {...VTCommonTableElProps}
              {...VTRowProps}
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
