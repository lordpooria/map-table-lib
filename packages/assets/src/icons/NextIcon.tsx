import React from "react";

import SvgIcon from "./SvgIcon";

interface Props {
  className?: string;
}

const NextIcon = ({ className }: Props) => {
  return (
    <SvgIcon className={className} id="mdi-skip-next">
      <path d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" />
    </SvgIcon>
  );
};

export default NextIcon;
