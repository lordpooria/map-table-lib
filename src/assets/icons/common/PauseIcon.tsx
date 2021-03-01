import React from "react";

import SvgIcon from "../SvgIcon";

interface Props {
  className?: string;
}

const PauseIcon = ({ className }: Props) => {
  return (
    <SvgIcon className={className} id="mdi-pause">
      <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
    </SvgIcon>
  );
};

export default PauseIcon;
