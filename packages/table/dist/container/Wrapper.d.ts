import React, { FC } from "react";
import { WrapperProps } from "../virtualize-table/container-virtual";
export declare const TableStoreProvider: FC<{
    children: React.ReactNode;
    width: number;
}>;
export declare const Provider: ({ children, direction, language, theme, }: WrapperProps) => JSX.Element;
export default Provider;
