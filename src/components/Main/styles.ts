import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    background: "#f2e9e4",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cartContent: {
    paddingTop: 0,
    width: "100%",
  },
  divider: {
    margin: "20px 0",
  },
  positive: {
    color: "green",
  },
  negative: {
    color: "rgba(255, 0, 0, 0.5)",
  },
}));
