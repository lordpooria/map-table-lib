import { action, Action } from "easy-peasy";

type TabType = Array<{ username: string; color: string; id: string }>;

export interface TDStoreTable {
  tabs: TabType;
  tabIndex: string;
  indicatorColor: string;

  setTabs: Action<TDStoreTable, TabType>;
  setTabIndex: Action<TDStoreTable, { tabIndex: string; color: string }>;
}

export const tdStoreTableModel: TDStoreTable = {
  tabs: [],
  tabIndex: "0",
  indicatorColor: "#FFF",

  setTabs: action((state, tabs) => {
    state.tabs = tabs;
    state.tabIndex = tabs[0].id;
    state.indicatorColor = tabs[0].color;
  }),
  setTabIndex: action((state, { tabIndex, color }) => {
    
    state.tabIndex = tabIndex;

    state.indicatorColor = color;
  }),
};

// const nodeEnv: string = (typeof process?.__ENV__ !== 'undefined' && __ENV__) as string;
// const store = createStore(vtStoreTableSize);

export default tdStoreTableModel;
