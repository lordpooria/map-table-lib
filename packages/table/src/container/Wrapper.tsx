import React, { FC } from "react";
import { StoreProvider, useStore } from "easy-peasy";
import store, { VTStoreModel } from "../store";
import ThemeMaker from "./ThemeProvider";
import { WrapperProps } from "../virtualize-table/container-virtual";
import { TableSizeProvider } from "./TableSizeProvider";
import { StyleProvider } from "@hesaba/theme-language";
import { TableRowProvider } from "./TableRowProvider";

export const TableStoreProvider: FC = ({ children }) => {
  const easyPeasyStore = useStore<VTStoreModel>();
  const isWrapepdWithCTProvider = easyPeasyStore?.getState()?.VTVersion;

  if (isWrapepdWithCTProvider) {
    return <>{children}</>;
  }

  return (
    <TableSizeProvider>
      <TableRowProvider>
        <StoreProvider store={store}>{children}</StoreProvider>
      </TableRowProvider>
    </TableSizeProvider>
  );
};

export const Provider = ({
  children,
  direction,
  language,
  theme,
}: WrapperProps) => (
  <StyleProvider language={language} direction={direction} theme={theme}>
    <ThemeMaker>{children}</ThemeMaker>
  </StyleProvider>
);

export default Provider;
