import React from "react";
import SvgIcon from "../SvgIcon";

interface Props {
  className?: string;
}

const DividerIcon = ({ className, ...rest }: Props) => {
  return (
    <SvgIcon className={className} id="mdi-dots-vertical" {...rest}>
      <path d="M11 24V5h2v24z" />
    </SvgIcon>
  );
};

export default DividerIcon;
