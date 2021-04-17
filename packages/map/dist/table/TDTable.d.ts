import React from "react";
import { TdTableProps } from "../types/TableType";
declare const TDTable: React.MemoExoticComponent<({ className, classes, tableProps, operationOnRows, }: TdTableProps & {
    className: string;
}) => JSX.Element>;
export default TDTable;
