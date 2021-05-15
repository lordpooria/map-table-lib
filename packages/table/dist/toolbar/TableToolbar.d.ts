/// <reference types="react" />
import { TableToolbarCompleteProps } from "../types/TableToolbar";
export declare const TableToolbar: ({ title, height, classes, hasFilter, searchable, onSearchTextChange, onFilterChange, ...rest }: TableToolbarCompleteProps) => JSX.Element;
export declare function ToolbarMoreVert({ classes, hasFilter, searchable, }: {
    classes: TableToolbarCompleteProps["classes"];
    hasFilter: TableToolbarCompleteProps["hasFilter"];
    searchable: TableToolbarCompleteProps["searchable"];
}): JSX.Element;
export declare function ToolbarOperation({ operationOnRows, }: {
    operationOnRows?: TableToolbarCompleteProps["operationOnRows"];
}): JSX.Element;
