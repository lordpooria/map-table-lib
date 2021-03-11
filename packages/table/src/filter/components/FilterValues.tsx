import React from "react";
import { TextField } from "@material-ui/core";

import clsx from "clsx";

export interface FilterBaseProps {
  filterIndex: number;
  valIndex: number;
  onSetFilter: (
    filterIndex: number,
    itemValIndex: number,
    itemVal: any
  ) => void;
  value: any;
  label: string;
  classes?: { root?: string; input?: string };
}

export function SimpleNumericInput({
  filterIndex,
  valIndex,
  onSetFilter,
  value,
  label,
  classes,
}: FilterBaseProps) {
  // const classes = filterValueStyles();

  const handleChange = (_: number) => (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (!e.target.value) return;
    onSetFilter(filterIndex, valIndex, e.target.value);
  };
  // if (value === undefined || value === null) return null;
  return (
    <TextField
      classes={{ root: clsx(classes?.root, classes?.input) }}
      key={`number-${valIndex}`}
      value={value}
      onChange={handleChange(valIndex)}
      type="number"
      label={label}
      variant="standard"
    />
  );
}

export function SimpleStringInput({
  filterIndex,
  valIndex,
  onSetFilter,
  value,
  classes,
  label,
}: FilterBaseProps) {
  const handleChange = (valIndex: number) => (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (!e.target.value) return;
    onSetFilter(filterIndex, valIndex, e.target.value);
  };
  // if (value === undefined || value === null) return null;
  return (
    <TextField
      classes={{ root: clsx(classes?.root, classes?.input) }}
      key={`string-${valIndex}`}
      value={value}
      onChange={handleChange(valIndex)}
      label={label}
      variant="standard"
    />
  );
}

// export function DateInput({
//   filterIndex,
//   valIndex,
//   onSetFilter,
//   value,
//   classes,
//   label,
// }: FilterBaseProps) {
  
//   // if (value === undefined || value === null) return null;
//   return (
//     <
