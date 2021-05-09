import React from "react";
import SvgIcon from "./SvgIcon";

interface Props {
  className?: string;
}

const ArrowUp = ({ className }: Props) => {
  return (
    <SvgIcon className={className} id="mdi-arrow-up">
      <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" />
    </SvgIcon>
  );
};

export default ArrowUp;
