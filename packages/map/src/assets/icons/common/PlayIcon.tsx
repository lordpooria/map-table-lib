import React from "react";

import SvgIcon  from "../SvgIcon";

interface Props {
  className?: string;
}

const PlayIcon = ({ className }: Props) => {
  return (
    <SvgIcon className={className} id="mdi-play">
      <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
    </SvgIcon>
  );
};

export default PlayIcon;
