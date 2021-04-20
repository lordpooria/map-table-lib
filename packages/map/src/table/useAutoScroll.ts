import { MAIN_LIST_ID, useTableRowAction } from "@hesaba/table";
import { useCallback, useEffect, useRef } from "react";
import { useTDStoreActions, useTDStoreState } from "../store";

type QuerySelectType = HTMLElement | null;

export const useAutoScroll = () => {
  const mainListRef = useRef<QuerySelectType>();
  const currentTimeIndex = useTDStoreState((state) => state.currentTimeIndex);
  const setCurrentTimeIndex = useTDStoreActions(
    (actions) => actions.setCurrentTimeIndex
  );
  const setActiveRow = useTableRowAction();

  const onScroll = useCallback((e) => {
    const top = e?.target?.scrollTop;
    if (!top) return;

    setCurrentTimeIndex({ index: Math.floor(top / 50) });
    // setCurrentTimeIndex()
  }, []);

  const onRowClick = useCallback((index:number)=>{
    console.log(index)
    setCurrentTimeIndex({index})
  },[])
  useEffect(() => {
    mainListRef.current?.scrollTo({ top: currentTimeIndex * 50 });
    setActiveRow(currentTimeIndex);
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
      }
    }, 50);
    return () => mainListRef.current?.removeEventListener("scroll", onScroll);
  }, []);

  return onRowClick;
};
