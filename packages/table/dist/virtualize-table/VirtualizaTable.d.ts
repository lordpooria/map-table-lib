import React from "react";
import { VirtualTableProps } from "../types/tableTypes";
declare const VirtualizaTable: React.MemoExoticComponent<({ rows, columns, selectable, height, width, resizable, hasFilter, title, sortable, operationOnRows, itemSize, classes, direction, pagination, ...rest }: VirtualTableProps) => JSX.Element | null>;
export default VirtualizaTable;
