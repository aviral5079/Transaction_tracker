import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";

const ExpenseListFilters = (props) => {
  return (
    <div>
      <input
        type="text"
        defaultValue={props.filters.text}
        onChange={(e) => {
          props.dispatch(setTextFilter({ text: e.target.value }));
        }}
      />
      <select
        onChange={(e) => {
          if (e.target.value === "date") props.dispatch(sortByDate());
          else props.dispatch(sortByAmount());
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);