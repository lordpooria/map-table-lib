import React, { FC } from "react";
import { StoreProvider, useStore } from "easy-peasy";
import store, { VTStoreModel } from "../store";
import ThemeMaker from "./ThemeProvider";
import { WrapperProps } from "../virtualize-table/container-virtual";
import { TableSizeProvider } from "./TableSizeProvider";
import { HesabaStyleProvider } from "@hesaba/theme-language";
import { AddStickyProvider } from "./TableStickyProvider";
import { TableRowProvider } from "./TableRowProvider";

export const TableStoreProvider: FC<
  {
    children: React.ReactNode;
  } & WrapperProps
> = ({ children, direction, language, theme }) => {
  const easyPeasyStore = useStore<VTStoreModel>();
  const isWrapepdWithCTProvider = easyPeasyStore?.getState()?.VTVersion;

  if (isWrapepdWithCTProvider) {
    return <>{children}</>;
  }

  return (
    <HesabaStyleProvider
      language={language}
      direction={direction}
      theme={theme}
    >
      <ThemeMaker>
        <StoreProvider store={store}>
          <TableSizeProvider>
            <TableRowProvider>
              <AddStickyProvider>{children}</AddStickyProvider>
            </TableRowProvider>
          </TableSizeProvider>
        </StoreProvider>
      </ThemeMaker>
    </HesabaStyleProvider>
  );
};
