import { CurrentWidths, TotalWidth } from "@/types";
import { Actions, useLocalStore } from "easy-peasy";
import React, { createContext, useContext } from "react";
import vtStoreTableSize, { VTStoreTableSize } from "@/store/tableSize";

type TableSizeStateType = {
  state: { currentWidths: CurrentWidths; totalWidth: TotalWidth };
};
type TableSizeActionType = {
  actions: Actions<VTStoreTableSize>;
};

const TableSizeActionContext = createContext<TableSizeActionType>(
  {} as TableSizeActionType
);
const TableSizeStateContext = createContext<TableSizeStateType>(
  {} as TableSizeStateType
);

export function TableSizeProvider({ children }: { children: React.ReactNode }) {
  const [state, actions] = useLocalStore(() => vtStoreTableSize);

  return (
    <TableSizeStateContext.Provider value={{ state }}>
      <TableSizeActionContext.Provider value={{ actions }}>
        {children}
      </TableSizeActionContext.Provider>
    </TableSizeStateContext.Provider>
  );
}

export function useTableSizeState() {
  const { state } = useContext(TableSizeStateContext);
  if (!state) {
    throw Error("use state inside provider");
  }
  return state;
}

export function useTableSizeAction() {
  const { actions } = useContext(TableSizeActionContext);
  if (!actions) {
    throw Error("use state inside provider");
  }
  return actions;
}
