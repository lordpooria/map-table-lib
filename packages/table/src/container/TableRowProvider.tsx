import React, { createContext, useCallback, useContext, useState } from "react";

type TableRowStateType = {
  activeRow: number;
};
type TableRowActionType = (_: number) => void;

const TableSizeActionContext = createContext<TableRowActionType>(
  {} as TableRowActionType
);
const TableRowStateContext = createContext<TableRowStateType>(
  {} as TableRowStateType
);

export function TableRowProvider({ children }: { children: React.ReactNode }) {
  // const [state, actions] = useLocalStore(() => vtStoreTableSize);
  const [state, setState] = useState<TableRowStateType>({
    activeRow: -1,
  });
  const setActiveRow = useCallback((index: number) => {
    setState({ activeRow: index });
  }, []);

  return (
    <TableRowStateContext.Provider value={state}>
      <TableSizeActionContext.Provider value={setActiveRow}>
        {children}
      </TableSizeActionContext.Provider>
    </TableRowStateContext.Provider>
  );
}

export function useTableRowState() {
  const state = useContext(TableRowStateContext);
  if (!state) {
    throw Error("use state inside provider");
  }
  return state;
}

export function useTableRowAction() {
  const actions = useContext(TableSizeActionContext);
  if (!actions) {
    throw Error("use state inside provider");
  }
  return actions;
}
