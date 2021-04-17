import { Action } from "easy-peasy";
import { CurrentWidths, TotalWidth } from "../types";
export interface VTStoreTableSize {
    currentWidths: CurrentWidths;
    totalWidth: TotalWidth;
    setSizes: Action<VTStoreTableSize, {
        currentWidths: CurrentWidths;
        totalWidth: TotalWidth;
    }>;
    setCurrentWidth: Action<VTStoreTableSize, {
        currentWidths: CurrentWidths;
    }>;
    setTotalWidth: Action<VTStoreTableSize, {
        totalWidth: TotalWidth;
    }>;
}
export declare const vtStoreTableSize: VTStoreTableSize;
export default vtStoreTableSize;
