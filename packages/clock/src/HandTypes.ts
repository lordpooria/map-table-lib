export type HandleClasses = { hand?: string; handBody?: string };
export interface HandleProps {
  angle?: number;
  name?: string;
  length?: number;
  oppositeLength?: number;
  width?: number;
  classes?: HandleClasses;
}
