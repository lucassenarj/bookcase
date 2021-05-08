import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import ResultsPage from "./pages/Results";
import reportWebVitals from './reportWebVitals';
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/results" component={ResultsPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
