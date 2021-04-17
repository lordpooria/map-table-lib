import { Action } from "easy-peasy";
declare type TabType = Array<{
    username: string;
    color: string;
    id: string;
}>;
export interface TDStoreTable {
    tabs: TabType;
    tabIndex: string;
    indicatorColor: string;
    setTabs: Action<TDStoreTable, TabType>;
    setTabIndex: Action<TDStoreTable, string>;
}
export declare const tdStoreTableModel: TDStoreTable;
export default tdStoreTableModel;
