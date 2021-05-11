import { useEffect } from "react";

import {
  RawTableColumns,
  RawTableRows,
  TableColumns,
  TableDataParser,
  TableRows,
} from "../types/main";

import { useTStoreActions } from "../store/reducerHooks";
import { DATA_FIELD, HESABA_DATA_FIELD } from "../utils/constants";

export function createEnhancedColumns(columns: RawTableColumns): TableColumns {
  return columns.map((c, index) => ({
    ...c,
    [DATA_FIELD]: `${HESABA_DATA_FIELD}-${c.key as string}`,
    colIndex: index,
    visible: true,
    sticked: false,
    sorted: undefined,
    type: c?.type ?? "string",
  }));
}
export function createEnhancedRows(rows: RawTableRows): TableRows {
  return rows.map((r, index) => ({
    id: index,
    selected: false,
    ...r,
  }));
}

export function parseTableData(columns: RawTableColumns, rows: RawTableRows) {
  const mainColumns = columns.filter((c) => c.type !== "tooltip");
  // const tooltipColumns = columns.filter((c) => c.type == "tooltip");
  const tooltipKeys = columns
    .filter((c) => c.type == "tooltip")
    .reduce(
      (acc, { reference, label }) =>
        reference
          ? reference in acc
            ? { ...acc, [reference]: [...acc[reference], label] }
            : { ...acc, [reference]: [label] }
          : acc,
      {} as any
    );
  const tooltipColumns = columns
    .filter((c) => c.type == "tooltip")
    .reduce(
      (acc, { reference, ...rest }) =>
        reference
          ? reference in acc
            ? { ...acc, [reference]: [...acc[reference], rest] }
            : { ...acc, [reference]: [rest] }
          : acc,
      {} as any
    );

  const enhancedColumns = createEnhancedColumns(mainColumns);
  const visibleRows = createEnhancedRows(rows);
  return { enhancedColumns, tooltipColumns,tooltipKeys, visibleRows };
}

export default function useTableData(
  columns: RawTableColumns,
  rows: RawTableRows,
  tableDataParser: TableDataParser | undefined
) {
  const setTableData = useTStoreActions((actions) => actions.setTableData);
  useEffect(() => {
    if (tableDataParser) setTableData(tableDataParser(columns, rows));
    else setTableData(parseTableData(columns, rows));
  }, [columns, rows, tableDataParser]);
}
