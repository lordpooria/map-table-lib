import React from "react";
import { AutoResizer, HesabaVirtualTable } from "@hesaba/table";
import { RawTableColumns } from "@hesaba/table/dist/types";

interface Props {}

const rows = [...Array.from({ length: 40 }, (_, i) => i)].map((item) => {
  const random = Math.random();
  return {
    name: `name${item}`,
    type: `type${item}`,
  };
});

type keys = typeof rows[number];

export const schemaColumns: RawTableColumns<keys> = [
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

const TDTable = ({}: Props) => {
  return (
    <div style={{ width: " calc(50vw + 220px)", height: "95vh" }}>
      <AutoResizer>
        {({ width, height }) => (
          <HesabaVirtualTable
            width={width}
            columns={schemaColumns}
            rows={rows}
            selectable
            resizable
            sortable
            height={height as number}
            // classes={{
            //   table: { container: classes.root },
            //   row: { root: classes.row, cell: { root: classes.cell } },
            //   footer: { root: classes.footer },
            //   toolbar: { root: classes.toolbar },
            //   header: { root: classes.header, cell: { root: classes.cell } },
            // }}
            // title="Simple Table"
            direction="ltr"
          />
        )}
      </AutoResizer>
    </div>
  );
};

export default TDTable;
