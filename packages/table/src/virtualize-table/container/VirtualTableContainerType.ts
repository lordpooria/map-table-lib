import { TableClasses } from "../../types/styleType";

export interface VirtualTableContainerType extends VirtualTableContainerProps {
  children: React.ReactNode;
  width: number | string;
}

export interface VirtualTableContainerProps {
  classes?: TableClasses;
  direction?: AppDirection;
}
