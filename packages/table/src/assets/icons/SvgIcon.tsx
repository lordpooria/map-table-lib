import React, { memo } from "react";
import clsx from "clsx";
import useStyles from "../styles/iconStyle";

interface Props {
  className?: string;
  id: string;
  children: any;
  // SvgProps?: SVGProps<any>;
}

const SvgIcon = memo(({ className, id, children, ...SvgProps }: Props) => {
  const classes = useStyles();

  return (
    <svg
      className={clsx(classes.root, className)}
      id={id}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...SvgProps}
    >
      {children}
    </svg>
  );
});

export default SvgIcon;
