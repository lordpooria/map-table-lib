import React, { FC } from "react";
import { StoreProvider, useStore } from "easy-peasy";
import store, { VTStoreModel } from "../store";
import ThemeMaker from "./ThemeProvider";
import { WrapperProps } from "../virtualize-table/container-virtual";
import { TableSizeProvider } from "./TableSizeProvider";
import { StyleProvider } from "@hesaba/theme-language";

export const TableStoreProvider: FC = ({ children }) => {
  const easyPeasyStore = useStore<VTStoreModel>();
  const isWrapepdWithCTProvider = easyPeasyStore?.getState()?.VTVersion;

  if (isWrapepdWithCTProvider) {
   
    return <>{children}</>;
  }

  return <StoreProvider store={store}>{children}</StoreProvider>;
};

export const Provider = ({
  children,
  direction,
  language,
  theme,
}: WrapperProps) => (
  <TableSizeProvider>
    <StyleProvider language={language} direction={direction} theme={theme}>
      <ThemeMaker>{children}</ThemeMaker>
    </StyleProvider>
  </TableSizeProvider>
);
