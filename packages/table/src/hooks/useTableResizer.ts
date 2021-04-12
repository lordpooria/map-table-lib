import { useEffect, useMemo, useRef } from "react";
import {
  DATA_FIELD,
  DRAG_CLASS,
  HESABA_TABLE_HEADER_CLASS,
  HESABA_TABLE_ROW_CLASS,
} from "../utils/constants";
import { MIN_TABLE_WIDTH, RESIZE_HANDLE_WIDTH } from "../utils/themeConstants";
import {
  CurrentWidths,
  QuerySelectType,
  TotalWidth,
} from "../types/useTableResizer";
import { useTableSizeAction } from "../container/TableSizeProvider";
// import { useStoreState } from "../store/reducerHooks";

export const useTableResizer = (
  tableWidth: number | string,
  direction?: AppDirection
) => {
  const columnElements = useRef<QuerySelectType>();
  const headers = useRef<QuerySelectType>();
  const rowRef = useRef<QuerySelectType>();
  const widthRef = useRef<number | string>(tableWidth);
  const dirRef = useRef(direction);
  const currentWidths = useRef<CurrentWidths>({});
  const totalWidth = useRef<TotalWidth>(0);
  const currentField = useRef<string>();
  const actions = useTableSizeAction();
  const tableRef = useRef<HTMLDivElement | null | undefined>();

  // const dir = useStoreState((state) => state.settings.direction);
  const [setTableRef, removeMouseDownListerner] = useMemo(() => {
    const init = () => {
      // if (!headers.current) {
      headers.current = tableRef.current?.querySelectorAll(
        `.${HESABA_TABLE_HEADER_CLASS}`
      ) as NodeListOf<HTMLElement>;
      rowRef.current = tableRef.current?.querySelectorAll(
        `.${HESABA_TABLE_ROW_CLASS}`
      ) as NodeListOf<HTMLElement>;

      // }
    };

    const onMouseDown = (e: MouseEvent) => {
      init();
      const div = e.target as HTMLElement;
      if (!div.classList.contains(DRAG_CLASS)) return;
      const parent = div.previousElementSibling;
      if (!parent) return;
      currentField.current = parent.getAttribute(DATA_FIELD) as string;
      //   columnElements.current = el as HTMLElement;
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      columnElements.current = tableRef.current?.querySelectorAll(
        `[${DATA_FIELD}="${currentField.current}"]`
      ) as NodeListOf<HTMLElement>;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (
        !columnElements.current ||
        columnElements.current.length === 0 ||
        !headers.current ||
        headers.current.length === 0 ||
        !tableRef ||
        !rowRef.current
      )
        return;

      let newWidth = MIN_TABLE_WIDTH;
      if (dirRef.current === "rtl") {
        const right = columnElements.current[0].getBoundingClientRect().right;
        newWidth = Math.max(-e.clientX + right, MIN_TABLE_WIDTH);
      } else {
        const left = columnElements.current[0].getBoundingClientRect().left;
        newWidth = Math.max(e.clientX - left, MIN_TABLE_WIDTH);
      }

      let headerWidth = 0;
      headers.current.forEach(
        (el) =>
          (headerWidth +=
            el.getBoundingClientRect().width + RESIZE_HANDLE_WIDTH)
      );

      if (typeof widthRef.current === "number") {
        totalWidth.current =
          headerWidth > widthRef.current ? headerWidth : widthRef.current;
      } else {
        totalWidth.current = headerWidth;
      }

      columnElements.current.forEach((el, index) => {
        if (index === 0) {
          el.style.width = `${newWidth}px`;
          el.style.minWidth = `${newWidth}px`;
          el.style.maxWidth = `${newWidth}px`;
        } else {
          el.style.width = `${newWidth + RESIZE_HANDLE_WIDTH}px`;
          el.style.minWidth = `${newWidth + RESIZE_HANDLE_WIDTH}px`;
          el.style.maxWidth = `${newWidth + RESIZE_HANDLE_WIDTH}px`;
        }
      });
      rowRef.current.forEach((el) => {
        el.style.width = `${headerWidth}px`;
        el.style.minWidth = `${headerWidth}px`;
        el.style.maxWidth = `${headerWidth}px`;
      });
    };

    const onMouseUp = (e: MouseEvent) => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      if (
        !currentField.current ||
        !columnElements.current ||
        columnElements.current.length === 0
      )
        return;

      if (dirRef.current === "rtl") {
        currentWidths.current[currentField.current] =
          -e.clientX + columnElements.current[0].getBoundingClientRect().right;
        actions.setCurrentWidth({ currentWidths: currentWidths.current });
      } else {
        currentWidths.current[currentField.current] =
          e.clientX - columnElements.current[0].getBoundingClientRect().left;
        actions.setCurrentWidth({ currentWidths: currentWidths.current });
      }
      actions.setTotalWidth({ totalWidth: totalWidth.current });
    };

    const removeMouseDown = (table: HTMLDivElement) => {
      table.removeEventListener("mousedown", onMouseDown);
    };
    const addMouseDownListerner = (table: HTMLDivElement) => {
      table.addEventListener("mousedown", onMouseDown);
    };

    const setTableRef = (ref: any) => {
      if (ref) {
        tableRef.current = ref;
        addMouseDownListerner(tableRef.current as HTMLDivElement);
      }
    };

    return [setTableRef, removeMouseDown];
  }, []);

  useEffect(() => {
    return () => {
      tableRef.current && removeMouseDownListerner(tableRef.current);
    };
  }, [removeMouseDownListerner]);

  useEffect(() => {
    widthRef.current = tableWidth;
    dirRef.current = direction;
  }, [tableWidth, direction]);

  return { setTableRef, tableRef };
};
