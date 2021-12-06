import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./reducers/index";
import { Providor } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Providor store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Providor>,
  document.getElementById("root")
);
