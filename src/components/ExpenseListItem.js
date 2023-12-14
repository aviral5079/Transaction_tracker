import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = (props) => {
  return (
    <div>
      <h3> {props.description} </h3>
      <p>Amount: $ {props.amount}</p>
      <p>CreatedAt: {props.createdAt}</p>
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.id }));
        }}
      >
        remove
      </button>
    </div>
  );
};

export default connect()(ExpenseListItem);
