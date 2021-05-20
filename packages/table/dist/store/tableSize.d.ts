import { Action } from "easy-peasy";
import { CurrentWidths, TotalWidth } from "../types";
export declare type States = {
    currentWidths: CurrentWidths;
    totalWidth: TotalWidth;
};
export interface VTTableSizeStore extends States {
    setSizes: Action<VTTableSizeStore, {
        widthKey: string;
        currentWidth: number;
        totalWidth: TotalWidth;
    }>;
    setCurrentWidth: Action<VTTableSizeStore, {
        currentWidths: CurrentWidths;
    }>;
    setTotalWidth: Action<VTTableSizeStore, {
        totalWidth: TotalWidth;
    }>;
}
export declare const vtOtherStoreTable: VTTableSizeStore;
export default vtOtherStoreTable;
