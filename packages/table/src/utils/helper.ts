import { useCallback } from "react";
import { useTableSizeState } from "../container/TableSizeProvider";
import { CommonPublicProps, TableColumns } from "../types";

import {
  CHECKBOX_WIDTH,
  RESIZE_HANDLE_WIDTH,
  ROW_MIN_WIDTH,
} from "./themeConstants";

export const useCalcTableWidth = (
  columns: TableColumns,
  width: CommonPublicProps["width"]
) => {
  const { totalWidth } = useTableSizeState();

  const calcRowWidth = useCallback(() => {
    if (totalWidth) return totalWidth > width ? totalWidth : width;

    const totalColumnSize = columns.reduce(
      (acc, cur) =>
        acc + (cur?.minWidth || ROW_MIN_WIDTH + RESIZE_HANDLE_WIDTH),
      CHECKBOX_WIDTH
    );
    return totalColumnSize > width ? totalColumnSize : width;
  }, [columns, width, totalWidth]);

  return calcRowWidth;
};

export function chooseClass(common: string, user?: string) {
  return user ? user : common;
}

export const pickObjectKeys = (
  object: Record<string, string>,
  keys: Array<string>
) =>
  keys.reduce(
    (acc, k) => (k in object ? { ...acc, [k]: object[k] as any } : acc),
    {}
  );

export const flatStringObject = (object: Record<string, string>) =>
  Object.keys(object).reduce((acc, k) => `${acc} \n ${k}:${acc[k as any]}`, "");
