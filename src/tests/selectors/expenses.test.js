import getVisibleExpenses from "../../selectors/expenses";

const expenses = [
  {
    id: "1",
    text: "Coffee",
    amount: 195,
    createdAt: 0,
  },
  {
    id: "2",
    text: "Rent",
    amount: 10000,
    createdAt: -1000,
  },
  {
    id: "3",
    text: "Credit Card",
    amount: 4500,
    createdAt: 1000,
  },
];

test("shoudld filter by text value", () => {
  const filters = {
    text: "re",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: 0,
    endDate: undefined,
  };

  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("should filter by endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: 0,
  };

  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test("should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };

  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("should sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };

  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[2], expenses[1]]);
});
