import React from "react";

import SvgIcon from "../SvgIcon";

interface Props {
  className?: string;
  style?: any;
}

const PlayReverseIcon = ({ className, style }: Props) => {
  return (
    <SvgIcon className={className} id="mdi-step-backward-2" style={style}>
      <path d="M17,5H14V19H17V5M12,5L1,12L12,19V5M22,5H19V19H22V5Z" />
    </SvgIcon>
  );
};

export default PlayReverseIcon;
