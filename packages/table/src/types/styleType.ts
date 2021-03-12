export interface StyleTypes {
  /**
   */
  classes?: {
    table?: TableClasses;
    toolbar?: ToolbarClasses;
    footer?: FooterClasses;
    row?: RowClasses;
    header?: HeaderClasses;
  };
}

export type TableClasses = { root?: string; container?: string };
export type ToolbarClasses = { root?: string };
export type FooterClasses = { root?: string };
export type RowClasses = { root?: string; cell?: CellClasses };
export type HeaderClasses = { root?: string ;cell?: CellClasses};
export type CellClasses = { root?: string; title?: string; checkbox?: string,divider?:string };
