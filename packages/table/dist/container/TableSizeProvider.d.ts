import React from "react";
import { VTStoreTableSize } from "../store/tableSize";
export declare function TableSizeProvider({ children }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function useTableSizeState(): {
    currentWidths: Record<string, number>;
    totalWidth: number;
};
export declare function useTableSizeAction(): import("easy-peasy").ActionMapper<VTStoreTableSize, import("easy-peasy").ValidActionProperties<VTStoreTableSize>>;
