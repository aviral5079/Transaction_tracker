import expensesReducer from "../../reducers/expenses";
import { expenses } from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@init" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expense", () => {
  const newExpense = {
    id: "4",
    text: "Rent",
    amount: 100,
    createdAt: 1000,
  };
  const action = {
    type: "ADD_EXPENSE",
    expense: newExpense,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test("should edit expense with the given id and updates", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "3",
    updates: {
      amount: 0,
    },
  };

  const newExpense = {
    ...expenses[2],
    ...action.updates,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], newExpense]);
});

test("should not edit any expense when id not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "4",
    updates: {
      amount: 100,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
