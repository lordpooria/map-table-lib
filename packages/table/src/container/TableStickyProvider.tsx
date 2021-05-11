import { ColumnDataField } from "../types";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import {
  useTableResizer,
  useStickyTableResizer,
} from "../hooks/useTableResizer";
import { useTStoreActions } from "../store/reducerHooks";
import { MAIN_LIST_ID, MAIN_STICKY_LIST_ID } from "../utils";
import { RESIZE_HANDLE_WIDTH, ROW_MIN_WIDTH } from "../utils/themeConstants";
import { getWidthNumber } from "../utils/theme";
import { useTableSizeState } from "./TableSizeProvider";

const COMPLETE_ROW_SIZE = ROW_MIN_WIDTH + RESIZE_HANDLE_WIDTH;

type AddStickyType = (
  index: number,
  dataField: ColumnDataField,
  sticked?: boolean
) => void;
type TableRefType = {
  mainTableRef: { ref: HTMLDivElement | undefined; setRef: any };
  stickyTableRef: { ref: HTMLDivElement | undefined; setRef: any };
};

const TableRefContext = createContext<TableRefType>({} as TableRefType);
const AddStickyContext = createContext<AddStickyType>({} as AddStickyType);

interface Props {
  children: React.ReactNode;
}

interface PropsWidth extends Props {
  width: number;
}

function AddStickyProvider({ children }: Props) {
  const { currentWidths } = useTableSizeState();
  const currentWidthsRef = useRef(currentWidths);
  const mainRef = useRef<HTMLDivElement | undefined>();
  const stickyRef = useRef<HTMLDivElement | undefined>();
  const toggleStickyColumn = useTStoreActions(
    (actions) => actions.toggleStickyColumn
  );

  const onAddSticky = useCallback(
    (index: number, dataField: ColumnDataField, sticked?: boolean) => {
      if (!mainRef.current || !stickyRef.current) return;
      toggleStickyColumn({ index });
      const mainW = getWidthNumber(mainRef.current.style.width);
      const stickyW = getWidthNumber(stickyRef.current.style.width);
      const colW =
        ((currentWidthsRef.current[dataField] || COMPLETE_ROW_SIZE) +
          RESIZE_HANDLE_WIDTH) *
        (sticked ? -1 : 1);

      mainRef.current.style.width = `${mainW - colW}px`;
      stickyRef.current.style.width = `${stickyW + colW}px`;
    },
    []
  );
  useEffect(() => {
    currentWidthsRef.current = currentWidths;
  }, [currentWidths]);

  useEffect(() => {
    let mainList: any, stickyList: any;
    const interval = setInterval(() => {
      if (!mainList) mainList = document.getElementById(MAIN_LIST_ID);
      if (!stickyList)
        stickyList = document.getElementById(MAIN_STICKY_LIST_ID);
      if (mainList && stickyList) {
        mainRef.current = mainList;
        stickyRef.current = stickyList;
        clearInterval(interval);
      }
    }, 200);
  }, []);

  return (
    <AddStickyContext.Provider value={onAddSticky}>
      {children}
    </AddStickyContext.Provider>
  );
}

function TableRefProvider({ children, width }: PropsWidth) {
  const mainTableRef = useTableResizer();
  const stickyTableRef = useStickyTableResizer(width);
  return (
    <TableRefContext.Provider value={{ mainTableRef, stickyTableRef }}>
      {children}
    </TableRefContext.Provider>
  );
}

export function TableStickyProvider({ children, width }: PropsWidth) {
  return (
    <TableRefProvider width={width}>
      <AddStickyProvider>{children}</AddStickyProvider>
    </TableRefProvider>
  );
}

export function useTableRef() {
  const refs = useContext(TableRefContext);
  if (!refs) {
    throw Error("use state inside provider");
  }
  return refs;
}
export function useAddSticky() {
  const onAddSticky = useContext(AddStickyContext);
  if (!onAddSticky) {
    throw Error("use state inside provider");
  }
  return onAddSticky;
}
