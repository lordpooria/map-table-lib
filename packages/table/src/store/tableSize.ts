import { action, Action } from "easy-peasy";

import { CurrentWidths, TotalWidth } from "../types";

export interface VTStoreTableSize {
  currentWidths: CurrentWidths;
  totalWidth: TotalWidth;

  setSizes: Action<
    VTStoreTableSize,
    { widthKey: string; currentWidth: number; totalWidth: TotalWidth }
  >;

  setCurrentWidth: Action<VTStoreTableSize, { currentWidths: CurrentWidths }>;
  setTotalWidth: Action<VTStoreTableSize, { totalWidth: TotalWidth }>;
}

export const vtStoreTableSize: VTStoreTableSize = {
  currentWidths: {},

  totalWidth: 0,

  setSizes: action((state, { totalWidth, widthKey, currentWidth }) => {
    state.currentWidths[widthKey] = currentWidth;
    state.totalWidth = totalWidth;
  }),
  setCurrentWidth: action((state, { currentWidths }) => {
    state.currentWidths = currentWidths;
  }),
  setTotalWidth: action((state, { totalWidth }) => {
    state.totalWidth = totalWidth;
  }),
};

// const nodeEnv: string = (typeof process?.__ENV__ !== 'undefined' && __ENV__) as string;
// const store = createStore(vtStoreTableSize);

export default vtStoreTableSize;
