import { useCallback, useEffect, useMemo, useRef } from "react";

import { useTableSizeAction } from "../container/TableSizeProvider";

import { MAIN_LIST_ID } from "../utils/constants";
import { useResizer } from "./useResizer";

export const useStickyTableResizer = (width: number) => {
  const { setSizes } = useTableSizeAction();
  const ref = useRef<HTMLDivElement | undefined>();
  const mainRef = useRef<HTMLDivElement | undefined>();

  const onMouseUpCB = useCallback((totalWidth, currentWidths) => {
    // setSizes({
    //   totalWidth: totalWidth.current,
    //   currentWidths: currentWidths.current,
    // });
  }, []);

  const onMouseMoveCB = useCallback(
    (headerWidth: number, wholeWidth: number) => {
      if (ref.current && mainRef.current) {
        ref.current.style.width = `${headerWidth}px`;
        mainRef.current.style.width = `${wholeWidth - headerWidth}px`;
      }
    },
    []
  );

  const { onMouseDown } = useResizer(ref, onMouseMoveCB, onMouseUpCB, width);

  const [setRef, removeMouseDownListerner] = useMemo(() => {
    // const onMouseDown = (e: MouseEvent) => {
    //   init();
    //   const div = e.target as HTMLElement;
    //   if (!ref.current || !div.classList.contains(DRAG_CLASS)) return;
    //   const parent = div.previousElementSibling;
    //   if (!parent) return;
    //   currentField.current = parent.getAttribute(DATA_FIELD) as string;
    //   //   columnElements.current = el as HTMLElement;
    //   window.addEventListener("mousemove", onMouseMove);
    //   window.addEventListener("mouseup", onMouseUp);
    //   columnElements.current = ref.current?.querySelectorAll(
    //     `[${DATA_FIELD}="${currentField.current}"]`
    //   ) as NodeListOf<HTMLElement>;
    //   tableWidth.current = +ref.current.style.width.replace("px", "");
    // };

    // const onMouseMove = (e: MouseEvent) => {
    //   if (
    //     !columnElements.current ||
    //     columnElements.current.length === 0 ||
    //     !headers.current ||
    //     headers.current.length === 0 ||
    //     !ref ||
    //     !rowRef.current
    //   )
    //     return;

    //   let newWidth = MIN_TABLE_WIDTH;
    //   if (dirRef.current === "rtl") {
    //     const right = columnElements.current[0].getBoundingClientRect().right;
    //     newWidth = Math.max(-e.clientX + right, MIN_TABLE_WIDTH);
    //   } else {
    //     const left = columnElements.current[0].getBoundingClientRect().left;
    //     newWidth = Math.max(e.clientX - left, MIN_TABLE_WIDTH);
    //   }

    //   let headerWidth = 0;
    //   headers.current.forEach(
    //     (el) =>
    //       (headerWidth +=
    //         el.getBoundingClientRect().width + RESIZE_HANDLE_WIDTH)
    //   );

    //   if (ref.current && mainRef.current) {
    //     ref.current.style.width = `${headerWidth}px`;
    //     mainRef.current.style.width = `${widthRef.current - headerWidth}px`;
    //   }
    //   columnElements.current.forEach((el, index) => {
    //     if (index === 0) {
    //       el.style.width = `${newWidth}px`;
    //       el.style.minWidth = `${newWidth}px`;
    //       el.style.maxWidth = `${newWidth}px`;
    //     } else {
    //       el.style.width = `${newWidth + RESIZE_HANDLE_WIDTH}px`;
    //       el.style.minWidth = `${newWidth + RESIZE_HANDLE_WIDTH}px`;
    //       el.style.maxWidth = `${newWidth + RESIZE_HANDLE_WIDTH}px`;
    //     }
    //   });
    //   // rowRef.current.forEach((el) => {
    //   //   el.style.width = `${headerWidth}px`;
    //   //   el.style.minWidth = `${headerWidth}px`;
    //   //   el.style.maxWidth = `${headerWidth}px`;
    //   // });
    // };

    // const onMouseUp = (e: MouseEvent) => {
    //   window.removeEventListener("mousemove", onMouseMove);
    //   window.removeEventListener("mouseup", onMouseUp);
    //   if (
    //     !currentField.current ||
    //     !columnElements.current ||
    //     columnElements.current.length === 0
    //   )
    //     return;

    //   if (dirRef.current === "rtl") {
    //     currentWidths.current[currentField.current] =
    //       -e.clientX + columnElements.current[0].getBoundingClientRect().right;
    //   } else {
    //     currentWidths.current[currentField.current] =
    //       e.clientX - columnElements.current[0].getBoundingClientRect().left;
    //   }

    //   setSizes({
    //     totalWidth: tableWidth.current,
    //     currentWidths: currentWidths.current,
    //   });
    // };

    const removeMouseDown = (table: HTMLDivElement) => {
      table.removeEventListener("mousedown", onMouseDown);
    };
    const addMouseDownListerner = (table: HTMLDivElement) => {
      table.addEventListener("mousedown", onMouseDown);
    };

    const setStickyTableRef = (nodeRef: any) => {
      if (nodeRef) {
        ref.current = nodeRef;

        addMouseDownListerner(nodeRef as HTMLDivElement);

        const interval = setInterval(() => {
          const el = document.getElementById(MAIN_LIST_ID);
          if (el) {
            clearInterval(interval);
            mainRef.current = el as HTMLDivElement;
          }
        }, 100);
      }
    };

    return [setStickyTableRef, removeMouseDown];
  }, []);

  useEffect(() => {
    return () => {
      ref.current && removeMouseDownListerner(ref.current);
    };
  }, [removeMouseDownListerner]);

  // useEffect(() => {
  //   dirRef.current = direction;
  //   widthRef.current = width;
  // }, [direction, width]);

  return { setRef, ref: ref.current };
};
