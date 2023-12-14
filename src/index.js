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
import { v4 as uuidv4 } from "uuid";

// const demoState = {
//   expenses: [
//     {
//       id: "21fw",
//       description: "January Rent",
//       note: "This was the final payment",
//       amount: 54400,
//       createdAt: 0,
//     },
//   ],
//   filters: {
//     text: "rent",
//     sortBy: "date", // 'date' or 'amount'
//     startDate: undefined,
//     endDate: undefined,
//   },
// };

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuidv4(),
      description: description,
      note: note,
      amount: amount,
      createdAt: createdAt,
    },
  };
};

const removeExpense = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSE",
    id: id,
  };
};

const editExpense = ({ id, updates }) => {
  return {
    type: "EDIT_EXPENSE",
    id: id,
    updates: updates,
  };
};

const setTextFilter = ({ text = "" } = {}) => {
  return {
    type: "SET_TEXT_FILTER",
    text,
  };
};

const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT",
  };
};

const sortByDate = () => {
  return {
    type: "SORT_BY_DATE",
  };
};

const setStartDate = (startDate) => {
  return {
    type: "SET_START_DATE",
    startDate,
  };
};

const setEndDate = (endDate) => {
  return {
    type: "SET_END_DATE",
    endDate,
  };
};

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter((expense) => expense.id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
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
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expenses.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expenses.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else {
        return a.amount < b.amount ? -1 : 1;
      }
    });
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

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
