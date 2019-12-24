import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import "./styles.css";

ReactDOM.render(
  <div className="App">
    {/* <h1>Header</h1> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
