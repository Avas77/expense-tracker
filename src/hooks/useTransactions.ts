import {
  expenseCategories,
  incomeCategories,
  resetCategories,
} from "../constants/categories";
import { useExpense } from "../context/ExpenseContext";

const useTransactions = (title: string) => {
  resetCategories();
  const { transactions } = useExpense();
  const transactionPerType = transactions.filter(
    (transaction) => transaction.type === title
  );
  const total = transactionPerType.reduce(
    (acc, current) => (acc += current.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  transactionPerType.forEach((transaction) => {
    const category = categories.find(
      (category) => category.type === transaction.category
    );

    if (category) {
      category.amount += transaction.amount;
      const index = categories.indexOf(category);
      categories[index] = category;
    }
  });
  const filteredCategories = categories.filter(
    (category) => category.amount > 0
  );

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((category) => category.amount),
        backgroundColor: filteredCategories.map((category) => category.color),
      },
    ],
    labels: filteredCategories.map((category) => category.type),
  };

  return { total, chartData };
};

export { useTransactions };
