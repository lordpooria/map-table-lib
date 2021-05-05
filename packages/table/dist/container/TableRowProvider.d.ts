import React from "react";
declare type TableRowStateType = {
    activeRow: number;
};
declare type TableRowActionType = (_: number) => void;
export declare function TableRowProvider({ children }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function useTableRowState(): TableRowStateType;
export declare function useTableRowAction(): TableRowActionType;
export {};
