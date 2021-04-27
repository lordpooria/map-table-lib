import { SortType } from "../../types/main";
import { VTMainListProps } from "../../types";
interface Props {
    index: number;
    sortable?: VTMainListProps["sortable"];
    columnKey: string;
    sorted: SortType;
}
declare const HeaderMenu: ({ index, sortable, columnKey, sorted }: Props) => JSX.Element;
export default HeaderMenu;
