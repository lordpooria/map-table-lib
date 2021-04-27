import { RawTableColumns } from "@hesaba/table";
export declare const useMapData: () => {
    rows: {
        name: string;
        type: string;
    }[];
    schemaColumns: RawTableColumns<{
        name: string;
        type: string;
    }>;
};
