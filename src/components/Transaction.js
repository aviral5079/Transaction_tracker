import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
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

const Transaction = (props) => {
  const sign = props.amount < 0 ? "-" : "+";

  return (
    <li className={props.amount < 0 ? "minus" : "plus"}>
      <span>{props.text} </span>
      <span>{props.createdAt} </span>
      <span>
        {sign}
        {moneyFormatter(props.amount)}
      </span>
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.id }));
        }}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default connect()(Transaction);
