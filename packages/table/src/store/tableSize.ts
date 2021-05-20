import { action, Action } from "easy-peasy";

import { CurrentWidths, TotalWidth } from "../types";

export type States = {
  currentWidths: CurrentWidths;
  totalWidth: TotalWidth;
};

export interface VTTableSizeStore extends States {
  setSizes: Action<
    VTTableSizeStore,
    { widthKey: string; currentWidth: number; totalWidth: TotalWidth }
  >;

  setCurrentWidth: Action<VTTableSizeStore, { currentWidths: CurrentWidths }>;
  setTotalWidth: Action<VTTableSizeStore, { totalWidth: TotalWidth }>;
}

export const vtOtherStoreTable: VTTableSizeStore = {
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

export default vtOtherStoreTable;
