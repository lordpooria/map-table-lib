import React from "react";
import {
  IconButtonProps,
  IconButton,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 2,
  },
  primary: { "&:hover": { color: theme.palette.primary.main } },
  secondary: { "&:hover": { color: theme.palette.secondary.main } },
  error: { "&:hover": { color: theme.palette.error.main } },
  warning: { "&:hover": { color: theme.palette.warning.main } },
  success: { "&:hover": { color: theme.palette.success.main } },
}));

type Props = IconButtonProps & {
  title: string;
  status?: "primary" | "secondary" | "success" | "error" | "warning";
};

export function ButtonTooltip({ title, status = "primary", ...rest }: Props) {
  const classes = useStyles();
  return (
    <Tooltip title={title}>
      <IconButton
        {...rest}
        className={clsx({
          [classes.primary]: status === "primary",
          [classes.secondary]: status === "secondary",
          [classes.error]: status === "error",
          [classes.warning]: status === "warning",
          [classes.success]: status === "success",
        })}
      />
    </Tooltip>
  );
}
