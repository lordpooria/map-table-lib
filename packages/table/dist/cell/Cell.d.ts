import { TableColumn } from "../types";
import { CurrentWidths } from "../types/useTableResizerType";
import { CellClasses } from "../types/styleType";
interface Props extends TableColumn {
    row: any;
    rowIndex: number;
    colIndex: number;
    currentWidths: CurrentWidths;
    columnsLength: number;
    colKey: string;
    classes?: CellClasses;
}
declare const Cell: ({ label, minWidth, colKey, CellComponent, HeaderComponent, visible, sorted, row, rowIndex, colIndex, columnsLength, currentWidths, classes, ...rest }: Props) => JSX.Element;
export default Cell;
