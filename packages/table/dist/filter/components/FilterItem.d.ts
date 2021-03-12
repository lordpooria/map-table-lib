import { TableFilterType } from "../VirtualTableFilterType";
import { TableColumns } from "../../types";
interface Props {
    filter: TableFilterType;
    index: number;
    columns: TableColumns;
}
declare const FilterItem: ({ filter, columns, index }: Props) => JSX.Element | null;
export default FilterItem;
