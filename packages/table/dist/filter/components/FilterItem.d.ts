/// <reference types="react" />
import { TableFilterType } from "../../types/VirtualTableFilter";
import { TableColumns } from "../../types/main";
interface Props {
    filter: TableFilterType;
    index: number;
    columns: TableColumns;
}
declare const FilterItem: ({ filter, columns, index }: Props) => JSX.Element | null;
export default FilterItem;
