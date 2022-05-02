import { Transaction } from "../types/TransactionType";

export const calculateBalance = (transactions: Transaction[]) => {
  return transactions.reduce((acc, current) => {
    return current.type === "Expense"
      ? acc - current.amount
      : acc + current.amount;
  }, 0);
};
