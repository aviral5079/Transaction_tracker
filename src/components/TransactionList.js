import React from "react";
import { connect } from "react-redux";
import Transaction from "./Transaction";
import getVisibleExpenses from "../selectors/expenses";

const TransactionList = (props) => {
  return (
    <>
      <h3>Transactions List</h3>
      <ul className="list">
        {props.transactions.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </>
  );
};

const mapPropsToState = (state) => {
  return {
    transactions: getVisibleExpenses(state.expenses, state.filters),
  };
};

export default connect(mapPropsToState)(TransactionList);
