import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  income: {
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },
  },
  expense: {
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
  },
  grid: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));
