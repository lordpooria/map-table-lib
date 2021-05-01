import { useTableStyles } from "components/styles/table-styles";
import theme from "components/styles/theme";
import React from "react";
import BaseTable from "./BaseTable";

export function LTRTable() {
  return <BaseTable direction="ltr" />;
}
export function MaterialTheme() {
  return <BaseTable theme={theme} />;
}
export function CustomizableClassComponent() {
  const classes = useTableStyles();
  return (
    <BaseTable
      classes={{
        table: { container: classes.root },
        row: { root: classes.row, cell: { root: classes.cell } },
        footer: { root: classes.footer },
        toolbar: { root: classes.toolbar },
        header: { root: classes.header, cell: { root: classes.cell } },
      }}
    />
  );
}
