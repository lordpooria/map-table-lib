import React, { createContext, useContext, useEffect, useState } from "react";

type CommonState = { withTable: boolean };

type CommonPropsType = {
  state: CommonState;
  action: (_: CommonState) => void;
};

const CommonPropsContext = createContext({} as CommonPropsType);

export default function CommonPropsProvider({
  children,
  state,
}: {
  children: React.ReactNode;
  state: CommonState;
}) {
  const [commonProps, setCommonProps] = useState({
    withTable: false,
  });
  useEffect(() => {
    setCommonProps(state);
  }, [state]);

  return (
    <CommonPropsContext.Provider
      value={{ state: commonProps, action: setCommonProps }}
    >
      {children}
    </CommonPropsContext.Provider>
  );
}

export function useCommonProps() {
  const { state } = useContext(CommonPropsContext);
  if (!state) {
    throw new Error("use common props state inside privider");
  }
  return state;
}

export function useCommonPropsAction() {
  const { action } = useContext(CommonPropsContext);
  if (!action) {
    throw new Error("use common props action inside privider");
  }
  return action;
}
