import React from "react";
import Operations from "../helper/Operations";
import BaseTable from "./BaseTable";

export function StickyColumns() {
  return (
    <BaseTable title="Table Title" VTToolbarProps={{ height: 50 }} withSticky />
  );
}
