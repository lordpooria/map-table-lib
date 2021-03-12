import React, { memo } from "react";
import clsx from "clsx";
import useStyles from "./styles/iconStyle";

interface Props {
  className?: string;
  id: string;
  children: any;
  style?: any;
}

const SvgIcon = memo(({ className, id, children, style }: Props) => {
  const classes = useStyles();

  return (
    <svg
      className={clsx(classes.root, className)}
      style={style}
      id={id}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
});

export default SvgIcon;
