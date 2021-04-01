import lightGreen from "@material-ui/core/colors/lightGreen";
import blueGrey from "@material-ui/core/colors/blueGrey";
import red from "@material-ui/core/colors/red";

const rawThemeObject = {
  palette: {
    primary: lightGreen,
    secondary: blueGrey,
    error: red,
  },
  typography: {
    fontFamily: 'Roboto,"Helvetica Neue",Arial,sans-serif',
    headline: {
      fontSize: "1rem",
    },
    subheading: {
      fontSize: "0.8125rem",
    },
    button: {
      fontWeight: 400,
      textTransform: "initial",
    },
  },
  shape: {
    borderRadius: 4,
  },
};

export default rawThemeObject