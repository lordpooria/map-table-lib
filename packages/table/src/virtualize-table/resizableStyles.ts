import { createStyles, makeStyles } from "@material-ui/core";

const style = makeStyles(() =>
  createStyles({
    root: {
      // "-webkit-mask-size": "100% 20000px",
      // "-webkit-mask-position": "left bottom",
      // transition: "mask-position 0.3s, -webkit-mask-position 0.3s",
      // "&:hover": {
      //   "-webkit-mask-position": "left top",
      // },
    },
  })
);

export default style;
