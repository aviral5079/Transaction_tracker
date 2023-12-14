import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "./actions/filters";

import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expense1 = store.dispatch(
  addExpense({ description: "Rent", amount: 100 })
);
// console.log(expense1);
const expense2 = store.dispatch(
  addExpense({ description: "Coffee", amount: 50 })
);
store.dispatch(removeExpense({ id: expense1.expense.id }));
store.dispatch(
  editExpense({ id: expense2.expense.id, updates: { amount: 500 } })
);
store.dispatch(setTextFilter({ text: "Rent" }));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(100));
store.dispatch(setEndDate(125));
store.dispatch(setEndDate());
store.dispatch(setStartDate());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
