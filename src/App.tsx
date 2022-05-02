import React from "react";
import { Grid } from "@material-ui/core";
import {
  ErrorPanel,
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import Details from "./components/Details/Details";
import useStyles from "./styles";
import Main from "./components/Main/Main";
import { ExpenseProvider } from "./context/ExpenseContext";

const App = () => {
  const classes = useStyles();

  return (
    <ExpenseProvider>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid xs={12} sm={4} className={classes.income}>
          <Details title="Income" />
        </Grid>
        <Grid xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid xs={12} sm={4} className={classes.expense}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </ExpenseProvider>
  );
};

export default App;
