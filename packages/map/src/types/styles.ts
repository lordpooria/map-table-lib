import { TableClasses } from "@hesaba/table";

export interface StyleTypes {
  /**
   */
  classes?: {
    table?: TDTableClasses;
    legend?: LegendClasses;
    map?: MapClasses;
    tdRoot?: ContainerClasses;
  };
}

export type TDTableClasses = TableClasses & { tabbar?: string };
export type LegendClasses = {
  root?: string;
  item?: string;
  text?: string;
  colorIndicator?: string;
};

export type ContainerClasses = string;
export type MapClasses = string;
