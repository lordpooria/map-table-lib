import { useLanguageState } from "@hesaba/theme-language";
import { useCallback, useEffect, useRef } from "react";
import { useTableSizeAction } from "../container/TableSizeProvider";
import { CurrentWidths, QuerySelectType, TotalWidth } from "../types";
import {
  DATA_FIELD,
  DRAG_CLASS,
  HESABA_TABLE_HEADER_CLASS,
  HESABA_TABLE_ROW_CLASS,
} from "../utils/constants";
import { MIN_TABLE_WIDTH, RESIZE_HANDLE_WIDTH } from "../utils/themeConstants";

export function useResizer(
  ref: any,
  onMouseMoveCB: any,
  onMouseUpCB: any,
  width: number
) {
  const { direction } = useLanguageState();
  //   const ref = useRef<HTMLDivElement | undefined>();
  const headerElments = useRef<QuerySelectType>();
  const rowElements = useRef<QuerySelectType>();
  const resizedDataField = useRef<string>();
  const resizedElement = useRef<QuerySelectType>();
  const dirRef = useRef(direction);
  const currentWidths = useRef<CurrentWidths>({});

  const newColumnWidth = useRef(MIN_TABLE_WIDTH);

  const tableWidth = useRef<TotalWidth>(0);
  const totalWidth = useRef<TotalWidth>(0);
  const widthRef = useRef<number>(width);

  const { setSizes } = useTableSizeAction();

  const init = useCallback(() => {
    headerElments.current = ref.current?.querySelectorAll(
      `.${HESABA_TABLE_HEADER_CLASS}`
    ) as NodeListOf<HTMLElement>;
    rowElements.current = ref.current?.querySelectorAll(
      `.${HESABA_TABLE_ROW_CLASS}`
    ) as NodeListOf<HTMLElement>;
  }, []);

  const onMouseDown = useCallback((e: MouseEvent) => {
    init();
    const div = e.target as HTMLElement;
    if (!div.classList.contains(DRAG_CLASS)) return;
    const parent = div.previousElementSibling;

    if (!parent) return;
    resizedDataField.current = parent.getAttribute(DATA_FIELD) as string;
    //   columnElements.current = el as HTMLElement;
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    resizedElement.current = ref.current?.querySelectorAll(
      `[${DATA_FIELD}="${resizedDataField.current}"]`
    ) as NodeListOf<HTMLElement>;
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (
      !resizedElement.current ||
      resizedElement.current.length === 0 ||
      !headerElments.current ||
      headerElments.current.length === 0 ||
      !ref ||
      !rowElements.current
    )
      return;

    if (dirRef.current === "rtl") {
      const right = resizedElement.current[0].getBoundingClientRect().right;
      newColumnWidth.current = Math.max(-e.clientX + right, MIN_TABLE_WIDTH);
    } else {
      const left = resizedElement.current[0].getBoundingClientRect().left;
      newColumnWidth.current = Math.max(e.clientX - left, MIN_TABLE_WIDTH);
    }

    let headerWidth = -RESIZE_HANDLE_WIDTH;
    headerElments.current.forEach(
      (el) =>
        (headerWidth += el.getBoundingClientRect().width + RESIZE_HANDLE_WIDTH)
    );

    totalWidth.current = headerWidth;
    onMouseMoveCB(headerWidth, widthRef.current);

    resizedElement.current.forEach((el, index) => {
      if (index === 0) {
        el.style.width = `${newColumnWidth.current}px`;
        el.style.minWidth = `${newColumnWidth.current}px`;
        el.style.maxWidth = `${newColumnWidth.current}px`;
      } else {
        el.style.width = `${newColumnWidth.current + RESIZE_HANDLE_WIDTH}px`;
        el.style.minWidth = `${newColumnWidth.current + RESIZE_HANDLE_WIDTH}px`;
        el.style.maxWidth = `${newColumnWidth.current + RESIZE_HANDLE_WIDTH}px`;
      }
    });
  }, []);

  const onMouseUp = useCallback(() => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
    if (
      !resizedDataField.current ||
      !resizedElement.current ||
      resizedElement.current.length === 0
    )
      return;

    setSizes({
      totalWidth: totalWidth.current,
      widthKey: resizedDataField.current,
      currentWidth: newColumnWidth.current,
    });
  }, []);

  useEffect(() => {
    dirRef.current = direction;
    widthRef.current = width;
  }, [direction]);

  return {
    onMouseDown,
    onMouseMove,
    onMouseUp,
  };
}
