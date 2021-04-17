import { useCallback } from "react";
import { useTableSizeState } from "../container/TableSizeProvider";
import { CommonPublicProps, TableColumns } from "../types";

import {
  CHECKBOX_SIZE,
  RESIZE_HANDLE_WIDTH,
  ROW_MIN_WIDTH,
} from "./themeConstants";

export const useCalcTableWidth = (
  columns: TableColumns,
  width: CommonPublicProps["width"]
) => {
  const { totalWidth } = useTableSizeState();

  const calcRowWidth = useCallback(() => {
    if (totalWidth) return totalWidth;
    const totalColumnSize = columns.reduce(
      (acc, cur) =>
        acc + (cur?.minWidth || ROW_MIN_WIDTH + RESIZE_HANDLE_WIDTH),
      CHECKBOX_SIZE
    );
    return totalColumnSize > width ? totalColumnSize : width;
  }, [columns, width]);

  return calcRowWidth;
};
