import { Actions, useLocalStore } from "easy-peasy";
import React, { createContext, useContext } from "react";
import vtSizeStoreTable, {
  VTTableSizeStore,
  States,
} from "../store/tableSize";

type TableSizeActionType = Actions<VTTableSizeStore>;

const TableSizeActionContext = createContext<TableSizeActionType>(
  {} as TableSizeActionType
);
const TableSizeStateContext = createContext<States>({} as States);

interface Props {
  children: React.ReactNode;
}

export function TableSizeProvider({ children }: Props) {
  const [state, actions] = useLocalStore(() => vtSizeStoreTable);

  return (
    <TableSizeStateContext.Provider value={state}>
      <TableSizeActionContext.Provider value={actions}>
        {children}
      </TableSizeActionContext.Provider>
    </TableSizeStateContext.Provider>
  );
}

export function useTableSizeState() {
  const state = useContext(TableSizeStateContext);
  if (!state) {
    throw Error("use state inside provider");
  }
  return state;
}

export function useTableSizeAction() {
  const actions = useContext(TableSizeActionContext);
  if (!actions) {
    throw Error("use state inside provider");
  }
  return actions;
}
