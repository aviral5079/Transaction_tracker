import React, { useState } from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddTransaction = (props) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [createdAt, setCreatedAt] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuidv4(),
      text: text,
      amount: +amount,
      createdAt: createdAt.toDateString(),
    };

    props.dispatch(addExpense(newTransaction));
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div>
          <label htmlFor="createdAt">
            Date <br />
          </label>{" "}
          <br />
          <DatePicker
            className="date-picker"
            selected={createdAt}
            onChange={(date) => setCreatedAt(date)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default connect()(AddTransaction);
