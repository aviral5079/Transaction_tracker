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
  addExpense({ description: "Rent", amount: 100 })
);
const expense2 = store.dispatch(
  addExpense({ description: "Coffee", amount: 50 })
);
store.dispatch(
  editExpense({ id: expense2.expense.id, updates: { amount: 500 } })
);

// store.dispatch(setTextFilter({ text: "Coffee" }));

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsx);
