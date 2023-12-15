import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    (p[0].split("")[0] === "-" ? "-" : "") +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

const Balance = (props) => {
  const amounts = props.transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h3>Your Balance</h3>
      <h1>{moneyFormatter(total)}</h1>
    </>
  );
};

const mapPropsToState = (state) => {
  return {
    transactions: getVisibleExpenses(state.expenses, state.filters),
  };
};

export default connect(mapPropsToState)(Balance);
