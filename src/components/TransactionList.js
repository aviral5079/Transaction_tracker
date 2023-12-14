import React from "react";
import { connect } from "react-redux";
import Transaction from "./Transaction";

const TransactionList = (props) => {
  return (
    <>
      <h3>History</h3>
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
    transactions: state.expenses,
  };
};

export default connect(mapPropsToState)(TransactionList);
