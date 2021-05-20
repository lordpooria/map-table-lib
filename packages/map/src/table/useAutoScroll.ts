import { MAIN_LIST_ID, useTableRowAction } from "@hesaba/table";
import { useCallback, useEffect, useRef } from "react";
import { useTDStoreActions, useTDStoreState } from "../store";

type QuerySelectType = HTMLElement | null;
const SHIFT_SCROLL_INDEX = 2;
const ITEM_SIZE = 50;

export const useAutoScroll = () => {
  const mainListRef = useRef<QuerySelectType>();
  const currentTimeIndex = useTDStoreState((state) => state.currentTimeIndex);
  const setCurrentTimeIndex = useTDStoreActions(
    (actions) => actions.setCurrentTimeIndex
  );
  const autoScroll = useRef(true);
  const preventAutoScroll = useRef(false);
  const setActiveRow  = useTableRowAction();

  const onScrolling = useCallback((e) => {
    const top = e?.target?.scrollTop;
    if (!top) return;

    setCurrentTimeIndex({
      index: Math.floor(top / ITEM_SIZE) + SHIFT_SCROLL_INDEX,
    });
    // setCurrentTimeIndex()
  }, []);
  const onScroll = useCallback(
    (e) => {
      if (autoScroll.current) return;
      onScrolling(e);
    },
    [onScrolling]
  );

  const onMouseDown = useCallback(() => {
    autoScroll.current = false;
  }, []);
  const onMouseUp = useCallback(() => {
    autoScroll.current = true;
  }, []);

  const onWheel = useCallback((e) => {
    onPreventAutoScroll();
    onScrolling(e);
  }, []);

  const onPreventAutoScroll = () => {
    autoScroll.current = false;
    preventAutoScroll.current = true;
  };
  const releaseAutoScroll = useCallback(() => {
    preventAutoScroll.current = false;
    autoScroll.current = true;
  }, []);

  const onRowClick = useCallback((index: number) => {
    setCurrentTimeIndex({ index });
    onPreventAutoScroll();
  }, []);

  const scrollTo = useCallback((index) => {
    mainListRef.current?.scrollTo({
      top: index * ITEM_SIZE,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (autoScroll.current) {
      scrollTo(currentTimeIndex);
    }
    setActiveRow(currentTimeIndex);
    if (preventAutoScroll.current) {
      releaseAutoScroll();
    }
  }, [currentTimeIndex]);

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      const el = document.getElementById(MAIN_LIST_ID);
      counter++;
      if (el || counter > 20) {
        clearInterval(interval);
        mainListRef.current = el;
        mainListRef.current?.addEventListener("scroll", onScroll);
        mainListRef.current?.addEventListener("wheel", onWheel);
        mainListRef.current?.addEventListener("mousedown", onMouseDown);
        mainListRef.current?.addEventListener("mouseup", onMouseUp);
      }
    }, 50);
    return () => {
      mainListRef.current?.removeEventListener("scroll", onScroll);
      mainListRef.current?.removeEventListener("wheel", onWheel);
      mainListRef.current?.removeEventListener("mousedown", onMouseDown);
      mainListRef.current?.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return onRowClick;
};
