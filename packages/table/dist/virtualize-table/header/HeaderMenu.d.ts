import React from "react";
import { SortType } from "../../types/main";
import { VTMainListProps } from "../../types";
interface Props {
    index: number;
    sortable?: VTMainListProps["sortable"];
    columnKey: string;
    dataField: string;
    sorted: SortType;
    sticked?: boolean;
    children: React.ReactNode;
}
declare const HeaderMenu: ({ index, sortable, columnKey, sorted, sticked, dataField, children, }: Props) => JSX.Element;
export default HeaderMenu;
