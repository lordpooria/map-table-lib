/// <reference types="react" />
import { TableFilterType } from "../../../types/VirtualTableFilter";
interface Props {
    filter: TableFilterType;
    index: number;
}
declare const FilterItem: ({ filter, index }: Props) => JSX.Element;
export default FilterItem;
