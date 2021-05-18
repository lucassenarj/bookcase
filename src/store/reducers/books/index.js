import {
  BOOKS_GET_LIST_ERROR,
  BOOKS_GET_LIST_REQUEST,
  BOOKS_GET_LIST_SUCCESS,
} from "store/actions";

const initialState = {
  books: [],
  loading: true,
  error: false,
};

const app = (state = initialState, action) => {
  switch(action.type) {
    case BOOKS_GET_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        books: [],
      };
    }
    case BOOKS_GET_LIST_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
        books: [],
      };
    }
    case BOOKS_GET_LIST_SUCCESS: {
      const books = action.payload;
      return {
        ...state,
        loading: false,
        error: false,
        books,
      };
    }
    default: 
      return state;
  }
};

export default app;
