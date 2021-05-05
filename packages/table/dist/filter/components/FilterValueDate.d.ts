import React from "react";
import { FilterBaseProps } from "./FilterValues";
export declare type Calndar = "gregory" | "jalali";
interface Props {
    children: React.ReactNode;
}
export declare const FilterValueDateWrapper: ({ children }: Props) => JSX.Element;
declare const FilterValueDate: ({ filterIndex, valIndex, onSetFilter, value, classes, label, }: FilterBaseProps) => JSX.Element;
export default FilterValueDate;
