import React, { FC } from "react";
import Provider from "./container/Wrapper";
import { VirtualTableProps } from "./types/tableTypes";
import VirtualizaTable from "./virtualize-table/VirtualizaTable";

/**
 * Decorator component that automatically adjusts the width and height of a single child
 */
export const HesabaVirtualTable: FC<VirtualTableProps> = ({
  direction = "ltr",
  theme,
  ...props
}: VirtualTableProps) => {
  return (
    <Provider direction={direction} theme={theme}>
      <VirtualizaTable {...props} direction={direction} />
    </Provider>
  );
};

export default HesabaVirtualTable;
