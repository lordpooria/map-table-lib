/// <reference types="ts-toolbelt" />
import { Actions } from "easy-peasy";
import React from "react";
import { VTToolbarStoreModel } from "./toolbar.reducer";
export declare function TableToolbarProvider({ children, }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function useTableToolbarState(): import("easy-peasy").StateMapper<import("Object/Pick")._Pick<VTToolbarStoreModel, import("Object/FilterKeys")._FilterKeys<VTToolbarStoreModel, import("easy-peasy").ActionTypes, "default">>>;
export declare function useTableToolbarAction(): Actions<VTToolbarStoreModel>;
