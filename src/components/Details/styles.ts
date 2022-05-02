import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  income: {
    borderBottom: "10px solid rgba(0, 255, 0, 0.5)",
    minHeight: "544px",
    borderRadius: "10px",
    background: "#f2e9e4",
  },
  expense: {
    borderBottom: "10px solid rgba(255, 0, 0, 0.5)",
    minHeight: "544px",
    borderRadius: "10px",
    background: "#f2e9e4",
  },
  cardContent: {
    minHeight: "480px",
    display: "flex",
    flexDirection: "column",
  },
  detail: {
    display: "flex",
    flex: "1",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: "1.2rem",
  },
}));
