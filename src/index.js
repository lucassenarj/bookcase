import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import ResultsPage from "./pages/Results";
import reportWebVitals from './reportWebVitals';
import "./i18n";
import "./index.css";

ReactDOM.render(
  <Suspense fallback="loading">
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/results" component={ResultsPage} />
      </Switch>
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);

reportWebVitals();
