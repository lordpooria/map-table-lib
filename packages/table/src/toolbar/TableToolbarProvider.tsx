import { Actions, useLocalStore, State } from "easy-peasy";
import React, { createContext, useContext } from "react";
import vtToolbarStore, { VTToolbarStoreModel } from "./toolbar.reducer";

const TableToolbarStateContext = createContext<State<VTToolbarStoreModel>>(
  {} as State<VTToolbarStoreModel>
);
const TableToolbarActionContext = createContext<Actions<VTToolbarStoreModel>>(
  {} as Actions<VTToolbarStoreModel>
);

export function TableToolbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, actions] = useLocalStore(() => vtToolbarStore);

  return (
    <TableToolbarStateContext.Provider value={state}>
      <TableToolbarActionContext.Provider value={actions}>
        {children}
      </TableToolbarActionContext.Provider>
    </TableToolbarStateContext.Provider>
  );
}

export function useTableToolbarState() {
  const state = useContext(TableToolbarStateContext);
  if (!state) {
    throw Error("use state inside provider");
  }
  return state;
}

export function useTableToolbarAction() {
  const actions = useContext(TableToolbarActionContext);
  if (!actions) {
    throw Error("use state inside provider");
  }
  return actions;
}
