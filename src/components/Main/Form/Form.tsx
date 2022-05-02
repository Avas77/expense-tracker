import React from "react";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { useSpeechContext } from "@speechly/react-client";
import useStyles from "./styles";
import { useExpense } from "../../../context/ExpenseContext";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories";
import { formatDate } from "../../../utils/formatDate";
import CustomizedSnackbar from "../../Snackbar/Snackbar";
import { getHelperText } from "../../../utils/getHelperText";

const initialState = {
  type: "Income",
  category: "",
  amount: "",
  date: new Date().toString(),
};

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = React.useState(initialState);
  const { dispatch } = useExpense();
  const [open, setOpen] = React.useState(false);
  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;
  const { segment } = useSpeechContext();
  const subTitle = getHelperText(segment);

  const addTransactions = () => {
    if (Number.isNaN(Number(formData.amount)) || !formData.date.includes("-"))
      return;
    dispatch({
      type: "ADD_TRANSACTION",
      transaction: {
        ...formData,
        amount: Number(formData.amount),
        id: uuidv4() as string,
      },
    });
    setOpen(true);
    setFormData(initialState);
  };

  React.useEffect(() => {
    if (segment) {
      if (segment.intent.intent === "add_expense") {
        setFormData({ ...formData, type: "Expense" });
      }
      if (segment.intent.intent === "add_income") {
        setFormData({ ...formData, type: "Income" });
      }
      if (segment.isFinal && segment.intent.intent === "create_transaction") {
        return addTransactions();
      }
      if (segment.isFinal && segment.intent.intent === "cancel_transaction") {
        setFormData(initialState);
        return;
      }

      segment.entities.forEach((entity) => {
        switch (entity.type) {
          case "amount":
            setFormData({ ...formData, amount: entity.value });
            break;
          case "date":
            setFormData({ ...formData, date: entity.value });
            break;
          case "category":
            const category = `${entity.value.charAt(0)}${entity.value
              .slice(1)
              .toLowerCase()}`;
            if (
              incomeCategories
                .map((category) => category.type)
                .includes(category)
            ) {
              setFormData({ ...formData, type: "Income", category });
            }
            if (
              expenseCategories
                .map((category) => category.type)
                .includes(category)
            ) {
              setFormData({ ...formData, type: "Expense", category });
            }
            break;
          default:
            break;
        }
      });

      if (
        segment.isFinal &&
        formData.amount &&
        formData.category &&
        formData.date
      ) {
        addTransactions();
      }
    }
  }, [segment]);
  return (
    <Grid container spacing={2}>
      <CustomizedSnackbar open={open} setOpen={setOpen} />
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          {subTitle}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) =>
              setFormData({ ...formData, type: e.target.value as string })
            }
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value as string })
            }
          >
            {selectedCategories.map((selected) => (
              <MenuItem value={selected.type}>{selected.type}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          fullWidth
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="date"
          fullWidth
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: formatDate(e.target.value) })
          }
        />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={addTransactions}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
