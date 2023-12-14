import { v4 as uuidv4 } from "uuid";

export const addExpense = ({ text = "", amount = 0, createdAt = 0 } = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuidv4(),
      text: text,
      amount: amount,
      createdAt: createdAt,
    },
  };
};

export const removeExpense = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSE",
    id: id,
  };
};

export const editExpense = ({ id, updates }) => {
  return {
    type: "EDIT_EXPENSE",
    id: id,
    updates: updates,
  };
};
