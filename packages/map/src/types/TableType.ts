import { RawTableColumns } from "@hesaba/table";
import { HesabaTimeDimensionProps } from "./HesabaTimeDimension";

export interface TdTableProps {
  classes?: TableClasses;
  tableProps?: HesabaTimeDimensionProps;
  operationOnRows?: Array<any>;
  schemaColumns?: RawTableColumns<any>;
}

export type TableClasses = { root?: string; tabbar?: string };
