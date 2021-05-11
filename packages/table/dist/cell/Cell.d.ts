import React from "react";
import { TableColumn, TooltipColumns, TooltipKeys } from "../types/main";
import { CellClasses } from "../types/styles";
interface Props extends TableColumn {
    row: any;
    rowIndex: number;
    colIndex: number;
    columnsLength: number;
    colKey: string;
    classes?: CellClasses;
    isScrolling?: any;
    tooltips?: TooltipColumns[string];
    tooltipKeys?: TooltipKeys[string];
}
declare const EnhancedCell: React.MemoExoticComponent<({ tooltips, tooltipKeys, ...rest }: Props) => JSX.Element>;
export default EnhancedCell;
