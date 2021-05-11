import { CurrentWidths } from "../types";
import { Actions } from "easy-peasy";
import React from "react";
import { VTStoreTableSize } from "../store/tableSize";
interface Props {
    children: React.ReactNode;
}
export declare function TableSizeProvider({ children }: Props): JSX.Element;
export declare function useTableSizeState(): {
    currentWidths: CurrentWidths;
    totalWidth: number;
};
export declare function useTableSizeAction(): Actions<VTStoreTableSize>;
export {};
