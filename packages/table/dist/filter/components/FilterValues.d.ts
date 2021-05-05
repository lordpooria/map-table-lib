/// <reference types="react" />
export interface FilterBaseProps {
    filterIndex: number;
    valIndex: number;
    onSetFilter: (filterIndex: number, itemValIndex: number, itemVal: any) => void;
    value: any;
    label: string;
    classes?: {
        root?: string;
        input?: string;
    };
}
export declare function SimpleNumericInput({ filterIndex, valIndex, onSetFilter, value, label, classes, }: FilterBaseProps): JSX.Element;
export declare function SimpleStringInput({ filterIndex, valIndex, onSetFilter, value, classes, label, }: FilterBaseProps): JSX.Element;
