import React from "react";

import SvgIcon from "./SvgIcon";

interface Props {
  className?: string;
}

const PreviousIcon = ({ className }: Props) => {
  return (
    <SvgIcon className={className} id="mdi-skip-previous">
      <path d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" />
    </SvgIcon>
  );
};

export default PreviousIcon;
