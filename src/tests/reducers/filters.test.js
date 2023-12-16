import filterReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filterReducer(undefined, { type: "@@init" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  });
});

test("should set sortBy to amount", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const state = filterReducer(undefined, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const action = {
    type: "SET_TEXT_FILTER",
    text: "abc",
  };

  const state = filterReducer(undefined, action);
  expect(state.text).toBe("abc");
});

test("should set startDate", () => {
  const action = {
    type: "SET_START_DATE",
    startDate: 100,
  };

  const state = filterReducer(undefined, action);
  expect(state.startDate).toBe(100);
});

test("should set endDate", () => {
  const action = {
    type: "SET_END_DATE",
    endDate: 100,
  };

  const state = filterReducer(undefined, action);
  expect(state.endDate).toBe(100);
});
