import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();  
// set default axios
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.common["Authorization"] = "";
axios.defaults.headers.post["Content-Type"] = "application/json";

// root render
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
