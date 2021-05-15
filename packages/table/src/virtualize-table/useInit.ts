import { useCallback, useEffect, useRef, useState } from "react";
import { ListOnScrollProps, VariableSizeList } from "react-window";
import useTableData from "../hooks/useTableData";
import { VirtualTableProps } from "../types";
import { MAIN_LIST_ID, MAIN_STICKY_LIST_ID } from "../utils";

export function useVTInit(
  rows: VirtualTableProps["rows"],
  columns: VirtualTableProps["columns"],
  tableDataParser: VirtualTableProps["tableDataParser"],
  withSticky: VirtualTableProps["withSticky"]
) {
  useTableData(columns, rows, tableDataParser);

  const staticGrid = useRef<VariableSizeList | null | undefined>();
  const mainList = useRef<VariableSizeList | null | undefined>();
  const mainOuterRefList = useRef<HTMLDivElement | undefined>();
  const stickyOuterRefList = useRef<HTMLDivElement | undefined>();

  const [scrollHeight, setScrollHeight] = useState(15);
  useEffect(() => {
    if (withSticky) {
      let retry = 0;
      const interval = setInterval(() => {
        retry += 1;
        const el = document.getElementById(MAIN_LIST_ID);
        const stickyEl = document.getElementById(MAIN_STICKY_LIST_ID);
        if (el && stickyEl) {
          clearInterval(interval);
          mainOuterRefList.current = el as HTMLDivElement;
          stickyOuterRefList.current = stickyEl as HTMLDivElement;

          setScrollHeight(
            Math.abs(
              mainOuterRefList.current.getBoundingClientRect().height -
                mainOuterRefList.current?.clientHeight
            )
          );
        } else if (retry > 5) {
          clearInterval(interval);
        }
        console.log("geprj")
      }, 100);
    }
  }, [withSticky]);
  const onScroll = useCallback(
    ({ scrollOffset, scrollUpdateWasRequested }: ListOnScrollProps) => {
      if (!scrollUpdateWasRequested && staticGrid.current) {
        staticGrid.current.scrollTo(scrollOffset);
      }
    },
    []
  );
  const onStickyScroll = useCallback((e) => {
    if (mainList.current && staticGrid.current && mainOuterRefList.current) {
      const offset =
        mainOuterRefList.current?.scrollTop + Math.sign(e.deltaY) * 30;

      mainList.current.scrollTo(offset);
      staticGrid.current.scrollTo(offset);
    }
  }, []);

  return {
    onScroll,
    onStickyScroll,
    staticGrid,
    mainList,
    scrollHeight,
  };
}
