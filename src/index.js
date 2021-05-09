import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import ResultsPage from "./pages/Results";
import reportWebVitals from './reportWebVitals';
import Loader from "./components/Loader";
import "./i18n";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <BrowserRouter basename="/bookcase/">
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/results" component={ResultsPage} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
