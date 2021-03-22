import React from "react";
import SvgIcon from "../SvgIcon";

interface Props {
  className?: string;
}

const PinIcon = ({ className }: Props) => {
  return (
    <SvgIcon className={className} id="mdi-pin">
      <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />
    </SvgIcon>
  );
};

export default PinIcon;
