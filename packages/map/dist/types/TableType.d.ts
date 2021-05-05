import { RawTableColumns } from "@hesaba/table";
import { HesabaTimeDimensionProps } from "./HesabaTimeDimension";
import { TDTableClasses } from "./styles";
export interface TdTableProps {
    tableClasses?: TDTableClasses;
    tableProps?: HesabaTimeDimensionProps;
    operationOnRows?: Array<any>;
    schemaColumns?: RawTableColumns<any>;
}
