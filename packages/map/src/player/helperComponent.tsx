import React from "react";

export const RenderComponent = ({ children, Component }: any) => {
  if (typeof Component === "boolean") {
    if (Component) return children;
    else return null;
  }

  return <Component />;
};
