import React, { FC } from "react";
import { StoreProvider, useStore } from "easy-peasy";
import store, { VTStoreModel } from "../store";
import ThemeMaker from "./ThemeProvider";
import { WrapperProps } from "@/virtualize-table/container-virtual";
import { TableSizeProvider } from "./TableSizeProvider";

const DataGridProvider: FC = ({ children }) => {
  const easyPeasyStore = useStore<VTStoreModel>();
  const isWrapepdWithCTProvider = easyPeasyStore?.getState()?.filters;

  if (isWrapepdWithCTProvider) {
    // we need to wrap it with a fragment because t's not allowed for children to be a ReactNode
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
    return <>{children}</>;
  }

  return <StoreProvider store={store}>{children}</StoreProvider>;
};

const Provider = ({ children, direction, theme }: WrapperProps) => (
  <DataGridProvider>
    <TableSizeProvider>
      <ThemeMaker direction={direction} theme={theme}>
        {children}
      </ThemeMaker>
    </TableSizeProvider>
  </DataGridProvider>
);

Provider.displayName = "DataGridProvider";

export default Provider;
