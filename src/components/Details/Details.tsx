import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { useTransactions } from "../../hooks/useTransactions";
import useStyles from "./styles";

const Details = ({ title }: { title: string }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  const detail = `No ${title === "Income" ? "Income" : "Expense"} added yet!`;

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">${total}</Typography>
        {chartData.labels.length !== 0 ? (
          <Doughnut data={chartData} />
        ) : (
          <Typography align="center" className={classes.detail}>
            {detail}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default Details;
