import { TableToolbarCompleteProps } from "../types/TableToolbar";
export declare const TableToolbar: ({ title, classes, ...rest }: TableToolbarCompleteProps) => JSX.Element;
export declare function ToolbarMoreVert({ classes, }: {
    classes: TableToolbarCompleteProps["classes"];
}): JSX.Element;
export declare function ToolbarOperation({ operationOnRows, }: {
    operationOnRows?: TableToolbarCompleteProps["operationOnRows"];
}): JSX.Element;
