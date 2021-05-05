import { CommonPublicProps, TableColumns } from "../types";
export declare const useCalcTableWidth: (columns: TableColumns<any>, width: CommonPublicProps["width"]) => () => string | number;
export declare function chooseClass(common: string, user?: string): string;
