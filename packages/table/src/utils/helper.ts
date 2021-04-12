import { TableColumns } from "../types";

import {
  CHECKBOX_SIZE,
  RESIZE_HANDLE_WIDTH,
  ROW_MIN_WIDTH,
} from "./themeConstants";

export function calcRowWidth(
  totalWidth: number | undefined,
  columns: TableColumns
) {
  return totalWidth
    ? totalWidth
    : columns.reduce(
        (acc, cur) =>
          acc + (cur?.minWidth || ROW_MIN_WIDTH + RESIZE_HANDLE_WIDTH),
        CHECKBOX_SIZE
      );
}
