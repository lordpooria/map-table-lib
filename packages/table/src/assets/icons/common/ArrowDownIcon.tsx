import React from "react";
import SvgIcon from "../SvgIcon";

interface Props {
  className?: string;
}

const ArrowDown = ({ className }: Props) => {
  return (
    <SvgIcon className={className} id="mdi-arrow-down">
      <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" />
    </SvgIcon>
  );
};

export default ArrowDown;
