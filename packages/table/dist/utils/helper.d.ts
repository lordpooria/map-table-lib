import { CommonPublicProps, TableColumns } from "../types";
export declare const useCalcTableWidth: (columns: TableColumns<any>, width: CommonPublicProps["width"]) => () => number;
export declare function chooseClass(common: string, user?: string): string;
export declare const pickObjectKeys: (object: Record<string, string>, keys: Array<string>) => {};
export declare const flatStringObject: (object: Record<string, string>) => string;
