export declare function useResizer(ref: any, onMouseMoveCB: any, width: number): {
    onMouseDown: (e: MouseEvent) => void;
    onMouseMove: (e: MouseEvent) => void;
    onMouseUp: () => void;
};
export declare const useTableResizer: () => {
    setRef: (nodeRef: any) => void;
    ref: HTMLDivElement | undefined;
};
export declare const useStickyTableResizer: (width: number) => {
    setRef: (nodeRef: any) => void;
    ref: HTMLDivElement | undefined;
};
