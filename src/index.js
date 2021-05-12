import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailsPage from "./pages/Details";
import FavoritesPage from "./pages/Favorites";
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
          <Route path="/details/:slug" component={DetailsPage} />
          <Route path="/favorites" component={FavoritesPage} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
