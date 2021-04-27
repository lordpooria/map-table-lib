import { TableClasses } from "@hesaba/table";

export interface StyleTypes {
  /**
   */
  classes?: {
    table?: TDTableClasses;
    legend?: LegendClasses;
  };
}

export type TDTableClasses = TableClasses & { tabbar?: string };
export type LegendClasses = {
  root?: string;
  item?: string;
  text?: string;
  colorIndicator?: string;
};
