import React from "react";
import { Transaction } from "../types/TransactionType";

type ExpenseProviderProps = { children: React.ReactNode };

type Action =
  | { type: "DELETE_TRANSACTION"; id: string }
  | { type: "ADD_TRANSACTION"; transaction: Transaction };
type Dispatch = (action: Action) => void;

const ExpenseContext = React.createContext<
  { transactions: Transaction[]; dispatch: Dispatch } | undefined
>(undefined);

const initialState: Transaction[] =
  JSON.parse(localStorage.getItem("transactions") as string) || [];

const contextReducer = (state: Transaction[], action: Action) => {
  let transactions;
  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter(
        (transaction) => transaction.id !== action.id
      );
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    case "ADD_TRANSACTION":
      transactions = [...state, action.transaction];
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    default:
      return state;
  }
};

const ExpenseProvider = ({ children }: ExpenseProviderProps) => {
  const [transactions, dispatch] = React.useReducer(
    contextReducer,
    initialState
  );

  return (
    <ExpenseContext.Provider value={{ transactions, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

const useExpense = () => {
  const context = React.useContext(ExpenseContext);

  if (context === undefined) {
    throw new Error("useExpense must be used within a ExpenseProvider");
  }
  return context;
};

export { ExpenseProvider, useExpense };
