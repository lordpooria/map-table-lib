import { useEffect } from "react";

import { RawTableColumns, RawTableRows } from "../types/main";

import { useTStoreActions } from "../store/reducerHooks";

export default function useTableData(
  columns: RawTableColumns,
  rows: RawTableRows
) {
  const setTableData = useTStoreActions((actions) => actions.setTableData);
  useEffect(() => {
    setTableData({ columns, rows });
  }, [columns, rows]);
}
