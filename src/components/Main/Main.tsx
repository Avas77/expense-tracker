import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  Divider,
} from "@material-ui/core";
import Form from "./Form/Form";
import List from "./List/List";
import useStyles from "./styles";
import { useExpense } from "../../context/ExpenseContext";
import InfoCard from "../InfoCard/InfoCard";
import { calculateBalance } from "../../utils/calculateBalance";

const Main = () => {
  const classes = useStyles();
  const { transactions } = useExpense();
  const totalBalance = calculateBalance(transactions);

  return (
    <Card className={classes.card}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography
          align="center"
          variant="h5"
          className={totalBalance >= 0 ? classes.positive : classes.negative}
        >
          Total Balance ${Math.abs(totalBalance)}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent>
        <List />
      </CardContent>
    </Card>
  );
};

export default Main;
