/// <reference types="react" />
export declare const useTableResizer: (tableWidth: number | string, direction?: "rtl" | "ltr" | undefined) => {
    currentWidths: import("react").MutableRefObject<Record<string, number>>;
    totalWidth: import("react").MutableRefObject<number>;
    setTableRef: (ref: any) => void;
    tableRef: import("react").MutableRefObject<HTMLDivElement | null | undefined>;
};
