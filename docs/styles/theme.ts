import { indigo, red } from "@material-ui/core/colors";

const defaultTheme = {
  palette: {
    primary: indigo,
    secondary: red,
    error: red,
  },
  typography: {
    fontFamily: 'Vazir,Roboto,"Helvetica Neue",Arial,sans-serif',
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

  mixins: {
    toolbar: {
      minHeight: 50,
    },
  },
};

export default defaultTheme;
