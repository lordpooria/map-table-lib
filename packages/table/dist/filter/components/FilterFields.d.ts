import React from "react";
import { ColumnType, TableColumnData, TableColumns } from "../../types";
import { FilterOperationsType, FilterValueType } from "../VirtualTableFilterType";
interface ColumnProps {
    filterIndex: number;
    columnIndex: number;
    value: TableColumnData | null;
    columns: TableColumns | undefined;
    classes?: {
        root?: string;
        input?: string;
    };
}
export declare const FilterColumn: React.MemoExoticComponent<({ value, filterIndex, columns, columnIndex, classes }: ColumnProps) => JSX.Element>;
interface OperationProps {
    filterIndex: number;
    operation: FilterOperationsType | undefined;
    columnType: ColumnType | undefined;
    classes?: {
        root?: string;
        input?: string;
    };
}
export declare const FilterOperations: React.MemoExoticComponent<({ operation, filterIndex, columnType, classes }: OperationProps) => JSX.Element>;
interface ValueProps {
    filterIndex: number;
    val: FilterValueType;
    valIndex: number;
    columnType: ColumnType | undefined;
    label: string;
    classes?: {
        root?: string;
        input?: string;
    };
}
export declare const FilterValues: React.MemoExoticComponent<({ filterIndex, val, valIndex, columnType, label, classes }: ValueProps) => JSX.Element>;
export {};
