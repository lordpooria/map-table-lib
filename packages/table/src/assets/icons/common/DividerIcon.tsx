import React from "react";
import SvgIcon from "../SvgIcon";

interface Props {
  className?: string;
}

const DividerIcon = ({ className }: Props) => {
  return (
    <SvgIcon className={className} id="mdi-dots-vertical">
      <path d="M11 24V5h2v24z" />
    </SvgIcon>
  );
};

export default DividerIcon;
