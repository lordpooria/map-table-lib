import { TablePaginationProps } from "@material-ui/core";
import { RawTableColumns, RawTableRows, TableDataParser } from "./main";
import { VirtualTableContainerProps, WrapperProps } from "../virtualize-table/types-virtual/VirtualTableContainer";
import { PublicTableToolbarProps } from "../types/TableToolbar";
import { StyleTypes } from "./styles";
import { Dir, LangString } from "@hesaba/theme-language";
import { VTPublicHeaderProps, VTPublicRowProps, VTMainListProps, CommonTableElProps } from "./tableElements";
import { PublicFilterProps } from "./Filter";
export declare type CommonPublicProps = {
    width: number | string;
};
declare type CommonTableProps = VTMainListProps & StyleTypes & PublicTableToolbarProps & {
    /**
     * direction by default is left to right
     */
    direction?: Dir;
    /**
     * two letter language of you table default value is fa
     */
    language?: LangString;
    /**
     *
     */
    theme?: WrapperProps["theme"];
    /**
     *If you have complex type of data type you could parse it your own and pass it to table store
     */
    /**
     * If you wanna make resizable column table
     * This option make some handle appear you could resize your table
     */
    hasToolbar?: boolean;
    /**
     *
     */
    hasFilter?: boolean;
    tableDataParser?: TableDataParser;
    columns: RawTableColumns;
    rows: RawTableRows;
};
export declare type VirtualTableProps = CommonPublicProps & CommonTableProps & {
    VTContainerProps?: VirtualTableContainerProps;
    /**
     */
    VTToolbarProps?: PublicTableToolbarProps;
    /**
     */
    VTHeaderProps?: VTPublicHeaderProps;
    /**
     */
    VTRowProps?: VTPublicRowProps;
    /**
     * if pagination data provided we render a footer pagination on table
     * for a pagination you need at least page,rowsPerPage, count of data
     */
    pagination?: TablePaginationProps;
    VTFilterProps?: PublicFilterProps;
    VTCommonTableElProps: CommonTableElProps;
};
export interface GridTableProps extends CommonTableProps {
}
export {};
