import React from "react";
import SvgIcon from "./SvgIcon";

interface Props {
  className?: string;
}

const ClearIcon = ({ className }: Props) => {
  return (
    <SvgIcon className={className} id="mdi-notification-clear-all">
      <path d="M5,13H19V11H5M3,17H17V15H3M7,7V9H21V7" />
    </SvgIcon>
  );
};

export default ClearIcon;
