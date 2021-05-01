import React from "react";
import {
  IconButton,
  IconButtonProps,
  Tooltip,
  withStyles,
} from "@material-ui/core";

export const SmallIconButton = withStyles(() => ({
  root: { padding: "2px" },
}))(IconButton);

type Props = IconButtonProps & {
  title: string;
};

export function ButtonTooltip({ title, ...rest }: Props) {
  return (
    <Tooltip title={title}>
      <SmallIconButton {...rest} />
    </Tooltip>
  );
}
