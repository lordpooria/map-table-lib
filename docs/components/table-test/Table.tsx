import { HesabaVirtualTable, AutoResizer, TableStoreProvider } from "@hesaba/table";
import { PercentCell, QualityCell } from "../table-test/CellComponent";
// import Operations from "../table-test/Operations";

const rows = [...Array.from({ length: 4000 }, (_, i) => i)].map((item) => {
  const random = Math.random();
  return {
    name: `name${item}`,
    type: `type${item}`,
    percent: Math.random() * 100,
    vaildated:
      random < 0.25
        ? "Poor"
        : random < 0.5
        ? "Bad"
        : random < 0.75
        ? "Medium"
        : "Good",
  };
});

export const schemaColumns = [
  {
    label: "name",
    key: "name",
  },
  {
    label: "type",
    key: "type",
    type: "string",
  },
  // {
  //   label: "percent",
  //   key: "percent",
  //   type: "date",
  //   CellComponent: PercentCell,
  // },

  // {
  //   label: "vaildated",
  //   key: "vaildated",
  //   type: "number",
  //   CellComponent: QualityCell,
  // },
];

interface Props {}

const Table = ({}: Props) => {
  return (
    <div style={{ width: " calc(50vw + 220px)", height: "70vh" }}>
    <AutoResizer>
          {({ width, height }) => (
            <HesabaVirtualTable
              width={width}
              height={height as number}
              columns={schemaColumns as any}
              rows={rows}
              selectable
              resizable
              sortable
              hasToolbar={false}
              VTCommonTableElProps={{
                CheckboxProps: { style: { color: "#F0f" } },
              }}
              VTHeaderProps={{DividerProps:{color: "#F0f"}}}
              direction="ltr"
              
            />
          )}
        </AutoResizer>
    </div>
  );
};

export default Table;
