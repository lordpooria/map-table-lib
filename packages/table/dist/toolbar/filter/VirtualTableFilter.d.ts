import React from "react";
import { TableToolbarCompleteProps } from "../../types/TableToolbar";
import { TableFilterType } from "../../types/VirtualTableFilter";
interface Props {
    onFilterChange: TableToolbarCompleteProps["onFilterChange"];
    filters: Array<TableFilterType>;
    showFilter: boolean;
}
declare const TableFilter: React.MemoExoticComponent<({ onFilterChange, filters, showFilter }: Props) => JSX.Element | null>;
export default TableFilter;
