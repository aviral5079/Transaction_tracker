import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";

const TransactionFilters = (props) => {
  return (
    <div>
      <h3>Transaction Filters</h3>
      <input
        type="text"
        defaultValue={props.filters.text}
        placeholder="Enter Text Filter"
        onChange={(e) => {
          props.dispatch(setTextFilter({ text: e.target.value }));
        }}
      />
      <label htmlFor="sortBy">
        Sort By <br />
      </label>
      <select
        value={props.filters.sortBy}
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

export default connect(mapStateToProps)(TransactionFilters);
