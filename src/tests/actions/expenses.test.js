import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should set up add expense action object", () => {
  const expenseData = {
    text: "Rent",
    amount: 109500,
    createdAt: new Date(),
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should set up add expense action object with default values", () => {
  const defaultData = {
    text: "",
    amount: 0,
    createdAt: 0,
  };
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...defaultData,
      id: expect.any(String),
    },
  });
});

test("should set up remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should set up edit expense action object", () => {
  const action = editExpense({ id: "123abc", updates: { amount: 10 } });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { amount: 10 },
  });
});
