import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import store from "./redux/store";

import "./index.css";
import "./styles/media.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
