import { ColumnDataField } from "../types";
import React from "react";
declare type AddStickyType = (index: number, dataField: ColumnDataField, sticked?: boolean) => void;
interface Props {
    children: React.ReactNode;
}
export declare function AddStickyProvider({ children }: Props): JSX.Element;
export declare function useAddSticky(): AddStickyType;
export {};
