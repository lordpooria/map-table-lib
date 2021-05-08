
import React from "react";
import Operations from "../helper/Operations";
import BaseTable from "./BaseTable";

export function ToolbarProps() {
  return <BaseTable title="Table Title" VTToolbarProps={{ height: 50 }} />;
}
export function ToolbarActionButton() {
  return <BaseTable operationOnRows={[Operations]} />;
}
