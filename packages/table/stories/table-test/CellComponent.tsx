import { CircularProgress, Typography } from "@material-ui/core";
import React from "react";

interface Props {
  row: any;
  index: number;
  value: any;
}

export const PercentCell = ({ value }: Props) => {
  return <CircularProgress variant="determinate" value={value} />;
};

export const QualityCell = ({ value }: Props) => {
  return (
    <div>
      {value === "Poor" ? (
        <Typography style={{ color: "#D44" }}>{value}</Typography>
      ) : value === "Bad" ? (
        <Typography style={{ color: "#DD4" }}>{value}</Typography>
      ) : value === "Medium" ? (
        <Typography style={{ color: "#44D" }}>{value}</Typography>
      ) : (
        <Typography style={{ color: "#4D4" }}>{value}</Typography>
      )}
    </div>
  );
};
