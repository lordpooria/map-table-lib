/// <reference types="react" />
import { ListOnScrollProps, VariableSizeList } from "react-window";
import { VirtualTableProps } from "../types";
export declare function useVTInit(rows: VirtualTableProps["rows"], columns: VirtualTableProps["columns"], tableDataParser: VirtualTableProps["tableDataParser"], withSticky: VirtualTableProps["withSticky"]): {
    onScroll: ({ scrollOffset, scrollUpdateWasRequested }: ListOnScrollProps) => void;
    onStickyScroll: (e: any) => void;
    staticGrid: import("react").MutableRefObject<VariableSizeList<any> | null | undefined>;
    mainList: import("react").MutableRefObject<VariableSizeList<any> | null | undefined>;
    scrollHeight: number;
};
