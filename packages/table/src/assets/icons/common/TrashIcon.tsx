import React from "react";
import SvgIcon from "../SvgIcon";

interface Props {
  className?: string;
}

const TrashIcon = ({ className }: Props) => {
  return (
    <SvgIcon className={className} id="mdi-trash-can-outline">
      <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />{" "}
    </SvgIcon>
  );
};

export default TrashIcon;
