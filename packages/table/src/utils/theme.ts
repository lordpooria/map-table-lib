import {
  commonSidebar,
  DEFAULT_PAGINATION_HEIGHT,
  DEFAULT_TOOLBAR_HEIGHT,
} from "./themeConstants";

export default {
  typography: {
    useNextVariants: true,
    fontFamily: ["Roboto", "IRANSans", "Arial"].join(","),
    fontSize: 14,
  },
};

export function calcTableHeght(
  hasToolbar: boolean,
  toolbarHeight: number | undefined,
  pagination: any,
  height: number
) {
  if (!hasToolbar && !pagination) return height;
  let tableH = height;
  if (pagination) {
    if (pagination?.height) tableH -= pagination?.height;
    else tableH -= DEFAULT_PAGINATION_HEIGHT;
  }
  if (hasToolbar) {
    if (toolbarHeight) tableH -= toolbarHeight;
    else tableH -= DEFAULT_TOOLBAR_HEIGHT;
  }
  return tableH;
}
export function calcStickyTableHeght(tableH: number, headerHeight?: number) {
  return tableH - 16 - (headerHeight ?? commonSidebar.itemHeight);
}

export function getWidthNumber(width: string) {
  return +width.replace("px", "");
}
