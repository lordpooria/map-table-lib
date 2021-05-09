// import {
//   UISchemaItem,
//   UISchema,
//   UISchemaWithId,
//   ColumnTypes,
// } from "/models/graph";
// import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

import { ColumnType } from "../../../types/main";
import { FilterOperationsType } from "../../../types/VirtualTableFilter";

// type FilterTypes = "common" | ColumnTypes;
export type FilterMethod = "AND" | "OR" | "CUSTOM";

export const FILTER_SCHEMA_KEY = "schema";

// export type FilterOperationsType = {
//   key: string;
//   name: string;
//   type: FilterTypes;
//   valSize?: number;
// };

// export type GraphFilter = {
//   id: string;
//   name: string;
//   col: Array<UISchemaItem | null>;
//   op: FilterOperationsType | null;
//   val: FilterValuesType;
//   // uiValid: string | undefined;
// };

// export type FilterNodeProp = AppNodeType & {
//   data: {
//     filters: Array<GraphFilter>;
//     groupFilterName: string;
//     [FILTER_SCHEMA_KEY]: UISchemaWithId;

//     script: string;
//   };
// };

// export const filtersExist = (
//   properties: Record<string, any>,
//   node: AppNodeType
// ) => {
//   return properties[node.id]?.filters.length;
// };

const baseTranslation = "filter.operations.";

export const operations = (
  t: any
): Record<string, Array<FilterOperationsType>> => ({
  commonOperations: [
    {
      key: "equals",
      name: t(`${baseTranslation}equals`),
      type: "common",
      valSize: 1,
    },
    {
      key: "notEquals",
      name: t(`${baseTranslation}notEquals`),
      type: "common",
      valSize: 1,
    },
    { key: "isNull", name: t(`${baseTranslation}isNull`), type: "common" },
    {
      key: "isNotNull",
      name: t(`${baseTranslation}isNotNull`),
      type: "common",
    },
    { key: "isEmpty", name: t(`${baseTranslation}isEmpty`), type: "common" },
    {
      key: "isNotEmpty",
      name: t(`${baseTranslation}isNotEmpty`),
      type: "common",
    },
    {
      key: "contains",
      name: t(`${baseTranslation}contains`),
      type: "common",
      valSize: 1,
    },
    {
      key: "notContaines",
      name: t(`${baseTranslation}notContaines`),
      type: "common",
      valSize: 1,
    },
  ],
  stringOptions: [
    {
      key: "regex",
      name: t(`${baseTranslation}regex`),
      type: "string",
      valSize: 1,
    },
    {
      key: "startWith",
      name: t(`${baseTranslation}startWith`),
      type: "string",
      valSize: 1,
    },
    {
      key: "endWith",
      name: t(`${baseTranslation}endWith`),
      type: "string",
      valSize: 1,
    },
  ],
  numericOptions: [
    {
      key: "between",
      name: t(`${baseTranslation}between`),
      type: "number",
      valSize: 2,
    },
  ],
  dateOptions: [
    {
      key: "dateFrom",
      name: t(`${baseTranslation}dateFrom`),
      type: "date",
      valSize: 1,
    },
    {
      key: "dateTo",
      name: t(`${baseTranslation}dateTo`),
      type: "date",
      valSize: 1,
    },
    {
      key: "between",
      name: t(`${baseTranslation}between`),
      type: "date",
      valSize: 2,
    },
  ],
  mapOptions: [
    {
      key: "surrounded",
      name: t(`${baseTranslation}surrounded`),
      type: "geographic",
      valSize: 1,
    },
  ],
});

export const reorderValues = (
  type: ColumnType | undefined,
  op: FilterOperationsType,
  // val: FilterValuesType
) => {
 return !op.valSize
    ? []
    : // : op.valSize < val.length
      // ? val.slice(0, op.valSize)
      [
        // ...val,
        ...new Array(op.valSize).fill(
          type === "date"
            ? new Date().toISOString()
            : type === "number"
            ? 0
            : type === "geographic"
            ? undefined
            : ""
        ),
      ];
};

// export const filterGetProperAttr = (node: FilterNodeProp) => {
//   return node;
// };

// export function filteredSchema(filter: GraphFilter, schema: UISchema) {
//   let remainingSchema;
//   let typedSchema;
//   if (filter?.col?.length) {
//     const filtercolumnsObj = filter.col.reduce(
//       (prev, cur) => (cur?.name ? { ...prev, [cur.name]: true } : prev),
//       {}
//     );
//     remainingSchema = schema.filter((s) => !(s.name in filtercolumnsObj));
//     typedSchema = remainingSchema.filter(
//       (s) => s.type === filter?.col[0]?.type
//     );
//   }
//   return {
//     typedSchema,
//     remainingSchema,
//   };
// }

// export const checkFilterValidation = (
//   schema: UISchema,
//   filter: GraphFilter,
//   t: any
// ) => {
//   const schemaObj = schema.reduce(
//     (prev, cur) => ({
//       ...prev,
//       [cur.name]: cur,
//     }),
//     {}
//   );

//   if (filter.col.length === 0 || !filter.op) {
//     return t("error.required");
//   } else if (filter.col.some((col) => !col || !(col.name in schemaObj))) {
//     return t("error.wrongSchema");
//   }
// };
