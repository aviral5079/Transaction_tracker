// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import { legacy_createStore as createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "21fw",
      description: "January Rent",
      note: "This was the final payment",
      amount: 54400,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "date", // 'date' or 'amount'
    startDate: undefined,
    endDate: undefined,
  },
};

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

console.log(store.getState());
