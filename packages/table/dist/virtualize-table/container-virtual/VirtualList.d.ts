import React from "react";
declare const VirtualList: React.MemoExoticComponent<React.ForwardRefExoticComponent<import("../../types").VTMainListProps & {
    width: string | number;
    classes?: {
        table?: import("../../types").TableClasses | undefined;
        toolbar?: import("../../types").ToolbarClasses | undefined;
        footer?: import("../../types").FooterClasses | undefined;
        row?: import("../../types").RowClasses | undefined;
        header?: import("../../types").HeaderClasses | undefined;
        pagination?: import("../../types").PaginationClasses | undefined;
    } | undefined;
    onScroll?: any;
    setTableRef?: any;
    extraStyle?: any;
    VTHeaderProps?: import("../../types").VTPublicHeaderProps | undefined;
    VTRowProps?: import("../../types").VTPublicRowProps | undefined;
    VTFilterProps?: import("../../types/Filter").PublicFilterProps | undefined;
    VTCommonTableElProps?: import("../../types").CommonTableElProps | undefined;
} & React.RefAttributes<unknown>>>;
export default VirtualList;
