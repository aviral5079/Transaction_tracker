// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import { legacy_createStore as createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy: incrementBy,
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy: decrementBy,
  };
};

const resetCount = () => {
  return {
    type: "RESET",
  };
};

const setCount = ({ count }) => {
  return {
    type: "SET",
    count: count,
  };
};

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
    case "RESET":
      return { count: 0 };
    case "SET":
      return { count: action.count };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 4 }));

store.dispatch(decrementCount({ decrementBy: 2 }));

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));
