import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

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

const expense1 = store.dispatch(
  addExpense({ description: "Rent Bill", amount: 100, createdAt: 310 })
);
const expense2 = store.dispatch(
  addExpense({ description: "Coffee Bill", amount: 50, createdAt: 3122 })
);
const expense3 = store.dispatch(
  addExpense({ description: "Gas Bill", amount: 12300, createdAt: 320 })
);

store.dispatch(
  editExpense({ id: expense2.expense.id, updates: { amount: 500 } })
);

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsx);
