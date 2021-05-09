import React from "react";
import SvgIcon from "./SvgIcon";

interface Props {
  className?: string;
}

const ArrowRightIcon = ({ className }: Props) => {
  return (
    <SvgIcon className={className} id="mdi-chevron-right">
      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </SvgIcon>
  );
};

export default ArrowRightIcon;
