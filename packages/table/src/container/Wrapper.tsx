import React, { FC } from "react";
import { StoreProvider, useStore } from "easy-peasy";
import store, { VTStoreModel } from "../store";
import ThemeMaker from "./ThemeProvider";
import { WrapperProps } from "../virtualize-table/container-virtual";
import { TableSizeProvider } from "./TableSizeProvider";
import { TableStickyProvider } from "./TableStickyProvider";
import { HesabaStyleProvider } from "@hesaba/theme-language";
import { TableRowProvider } from "./TableRowProvider";

export const TableStoreProvider: FC<{
  children: React.ReactNode;
  width: number;
}> = ({ children, width }) => {
  const easyPeasyStore = useStore<VTStoreModel>();
  const isWrapepdWithCTProvider = easyPeasyStore?.getState()?.VTVersion;

  if (isWrapepdWithCTProvider) {
    return <>{children}</>;
  }

  return (
    <TableRowProvider>
      <StoreProvider store={store}>
        <TableSizeProvider>
          <TableStickyProvider width={width}>{children}</TableStickyProvider>
        </TableSizeProvider>
      </StoreProvider>
    </TableRowProvider>
  );
};

export const Provider = ({
  children,
  direction,
  language,
  theme,
}: WrapperProps) => (
  <HesabaStyleProvider language={language} direction={direction} theme={theme}>
    <ThemeMaker>{children}</ThemeMaker>
  </HesabaStyleProvider>
);

export default Provider;
