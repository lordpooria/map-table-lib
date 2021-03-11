import React from "react";
import VirtualTableStore from "../../store/VirtualContext";

interface Props {
  children: React.ReactNode;
}

const VirtualTableProvider = ({ children }: Props) => {
  // const calendar = "jalali2";
  return <VirtualTableStore.Provider>{children}</VirtualTableStore.Provider>;
};

export default VirtualTableProvider;
