/// <reference types="react" />
import { SortType } from "../../types/main";
import { VTMainListProps } from "../../types";
interface Props {
    index: number;
    sortable?: VTMainListProps["sortable"];
    columnKey: string;
    dataField: string;
    sorted: SortType;
    sticked?: boolean;
}
declare const HeaderMenu: ({ index, sortable, columnKey, sorted, sticked, dataField, }: Props) => JSX.Element;
export default HeaderMenu;
