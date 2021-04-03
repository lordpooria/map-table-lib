import { RawTableColumns } from "@hesaba/table";
import { GeoJSONData } from "../types";

export const useMapData = (data: GeoJSONData) => {
  
  const rows = [...Array.from({ length: 40 }, (_, i) => i)].map((item) => {
    return {
      name: `name${item}`,
      type: `type${item}`,
    };
  });

  type keys = typeof rows[number];

  const schemaColumns: RawTableColumns<keys> = [
    {
      label: "name",
      key: "name",
    },
    {
      label: "type",
      key: "type",
      type: "string",
    },
  ];

  return {
    rows,
    schemaColumns,
  };
};
