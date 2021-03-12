import React from "react";
import SvgIcon from "../SvgIcon";

interface Props {
  className?: string;
}

const DividerIcon = ({ className }: Props) => {
  return (
    <SvgIcon className={className} id="mdi-dots-vertical">
      <path d="M11 19V5h2v14z" />
    </SvgIcon>
  );
};

export default DividerIcon;
