import { combineReducers } from "redux";

import app from "./app";
import books from "./books";

const rootReducer = combineReducers({
  app,
  books,
});

export default rootReducer;
