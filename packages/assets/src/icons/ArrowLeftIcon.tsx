import React from "react";
import SvgIcon from "./SvgIcon";

interface Props {
  className?: string;
}

const ArrowLeftIcon = ({ className }: Props) => {
  return (
    <SvgIcon className={className} id="mdi-chevron-left">
      <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </SvgIcon>
  );
};

export default ArrowLeftIcon;
