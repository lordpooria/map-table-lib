import { SortType } from "../../types";
interface Props {
    index: number;
    sortable?: boolean;
    columnKey: string;
    sorted: SortType;
}
declare const HeaderMenu: ({ index, sortable, columnKey, sorted }: Props) => JSX.Element;
export default HeaderMenu;
