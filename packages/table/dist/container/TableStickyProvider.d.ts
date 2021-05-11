import { ColumnDataField } from "../types";
import React from "react";
declare type AddStickyType = (index: number, dataField: ColumnDataField, sticked?: boolean) => void;
declare type TableRefType = {
    mainTableRef: {
        ref: HTMLDivElement | undefined;
        setRef: any;
    };
    stickyTableRef: {
        ref: HTMLDivElement | undefined;
        setRef: any;
    };
};
interface Props {
    children: React.ReactNode;
}
interface PropsWidth extends Props {
    width: number;
}
export declare function TableStickyProvider({ children, width }: PropsWidth): JSX.Element;
export declare function useTableRef(): TableRefType;
export declare function useAddSticky(): AddStickyType;
export {};
