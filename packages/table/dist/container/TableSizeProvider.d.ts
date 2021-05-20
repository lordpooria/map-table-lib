import { Actions } from "easy-peasy";
import React from "react";
import { VTTableSizeStore, States } from "../store/tableSize";
declare type TableSizeActionType = Actions<VTTableSizeStore>;
interface Props {
    children: React.ReactNode;
}
export declare function TableSizeProvider({ children }: Props): JSX.Element;
export declare function useTableSizeState(): States;
export declare function useTableSizeAction(): TableSizeActionType;
export {};
