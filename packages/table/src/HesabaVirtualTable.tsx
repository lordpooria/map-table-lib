import React from "react";
import Provider from "./container/Wrapper";
import { VirtualTableProps } from "./types/tableTypes";
import VirtualizaTable from "./virtualize-table/VirtualizaTable";

const HesabaVirtualTable = ({
  direction = "ltr",
  ...props
}: VirtualTableProps) => {
  return (
    <Provider direction={direction}>
      <VirtualizaTable {...props} direction={direction} />
    </Provider>
  );
};

export default HesabaVirtualTable;
