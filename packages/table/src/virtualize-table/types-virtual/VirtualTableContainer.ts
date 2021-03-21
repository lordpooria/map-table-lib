import { TableClasses } from "../../types/styles";

export interface VirtualTableContainerType extends VirtualTableContainerProps {
  children: React.ReactNode;
  width: number | string;
}

export interface VirtualTableContainerProps {
  classes?: TableClasses;
  direction?: AppDirection;
}
