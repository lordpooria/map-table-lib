import { RawTableColumns } from "../../src";

export const simpleRows = [...Array.from({ length: 40 }, (_, i) => i)].map(
  (item) => {
    const random = Math.random();
    return {
      name: `name${item}`,
      type: `type${item}`,
    };
  }
);

type keys = typeof simpleRows[number];

export const simpleSchemaColumns: RawTableColumns<keys> = [
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
