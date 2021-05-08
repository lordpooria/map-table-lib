import { createStyles, makeStyles } from "@material-ui/core";

export const useTableStyles = makeStyles((theme) =>
createStyles({
  toolbar: {
    backgroundColor: "#D0C",
  },

  footer: {
    backgroundColor: "8D0",
  },
  cell: {
    backgroundColor: "88c",
    color: "#F0F",
  },
  row: {
    backgroundColor: "888",
    color: "#F0F",
  },

  header: {
    backgroundColor: "666",
    color: "#F8F",
  },
  root: {
    backgroundColor: "ff0",
    color: "#444",
  },
})
);