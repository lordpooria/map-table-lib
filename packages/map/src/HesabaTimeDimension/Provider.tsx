import React, { FC } from "react";
import { StoreProvider, useStore} from "easy-peasy";

import store, { TDStoreModel } from "../store/store";

interface Props {
  children: React.ReactNode;
}

const Wrapper: FC<Props> = ({ children }) => {
  const easyPeasyStore = useStore<TDStoreModel>();
  const isWrapepdWithReactFlowProvider = easyPeasyStore?.getState()?.tdVersion;

  if (isWrapepdWithReactFlowProvider) {
    // we need to wrap it with a fragment because t's not allowed for children to be a ReactNode
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
    return <>{children}</>;
  }

  return <StoreProvider store={store}>{children}</StoreProvider>;
};

Wrapper.displayName = "TDProvider";

export default Wrapper;
