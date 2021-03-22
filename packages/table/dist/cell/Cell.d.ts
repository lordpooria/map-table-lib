import { TableColumn } from "../types/main";
import { CurrentWidths } from "../types/useTableResizer";
import { CellClasses } from "../types/styles";
interface Props extends TableColumn {
    row: any;
    rowIndex: number;
    colIndex: number;
    currentWidths: CurrentWidths;
    columnsLength: number;
    colKey: string;
    classes?: CellClasses;
    isScrolling?: any;
}
declare const Cell: ({ label, minWidth, colKey, CellComponent, HeaderComponent, visible, sorted, row, rowIndex, colIndex, columnsLength, currentWidths, classes, sticky, custom, isScrolling, ...rest }: Props) => JSX.Element;
export default Cell;
