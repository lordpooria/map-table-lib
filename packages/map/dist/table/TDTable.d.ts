import { RawTableColumns } from "@hesaba/table/dist/types";
interface Props {
}
declare const rows: {
    name: string;
    type: string;
}[];
declare type keys = typeof rows[number];
export declare const schemaColumns: RawTableColumns<keys>;
declare const TDTable: ({}: Props) => JSX.Element;
export default TDTable;
