import React from "react";
import { TdTableProps } from "../types/TableType";
declare type TDTableCompleteProps = TdTableProps & {
    height: number | undefined;
    width: number;
    initialWidth: number;
    className: string;
    theme?: any;
};
declare const TDTableContainer: React.MemoExoticComponent<(props: TDTableCompleteProps) => JSX.Element>;
export default TDTableContainer;
