// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import { createStore } from "redux";

const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState());
