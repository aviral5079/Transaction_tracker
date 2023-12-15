import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../../actions/filters";

test("should generate set start date action object", () => {
  const startDate = new Date();
  const action = setStartDate(startDate);
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate,
  });
});

test("should generate set end date action object", () => {
  const endDate = new Date();
  const action = setEndDate(endDate);
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate,
  });
});

test("should generate sortByDate action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("should generate sortByAmount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

test("should generate setTextFilter action object", () => {
  const data = {
    text: "rent",
  };
  const action = setTextFilter(data);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    ...data,
  });
});

test("should generate setTextFilter action object", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});
