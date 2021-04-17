export interface StyleTypes {
  /**
   */
  classes?: {
    table?: TableClasses;
    toolbar?: ToolbarClasses;
    footer?: FooterClasses;
    row?: RowClasses;
    header?: HeaderClasses;
    pagination?: PaginationClasses;
  };
}

export type TableClasses = { root?: string; container?: string };
export type ToolbarClasses = {
  root?: string;
  icon?: string;
  iconButton?: string;
  menu?: string;
  menuItem?: string;
};
export type FooterClasses = { root?: string };
export type RowClasses = {
  root?: string;
  cell?: CellClasses;
  evenRow?: string;
  oddRow?: string;
};
export type HeaderClasses = { root?: string; cell?: CellClasses };
export type CellClasses = {
  root?: string;
  title?: string;
  checkbox?: string;
  divider?: string;
};

export type PaginationClasses = { root?: string };
