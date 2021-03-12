import React from "react";

import SvgIcon  from "../SvgIcon";

interface Props {
  className?: string;
  style?:any
}

const PlayIcon = ({ className,style }: Props) => {
  return (
    <SvgIcon className={className} id="mdi-play" style={style}>
      <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
    </SvgIcon>
  );
};

export default PlayIcon;
