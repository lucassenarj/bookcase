import api from "services/api";

export const BOOKS_GET_LIST_ERROR = "BOOKS_GET_LIST_ERROR";
export const BOOKS_GET_LIST_REQUEST = "BOOKS_GET_LIST_REQUEST";
export const BOOKS_GET_LIST_SUCCESS = "BOOKS_GET_LIST_SUCCESS";

export function getBooks(terms) {
  return async (dispatch) => {
    try {
      dispatch({
        type: BOOKS_GET_LIST_REQUEST
      });

      const { data } = await api.get(`/volumes?q=${terms}&orderBy=relevance&maxResults=36`);
      
      await dispatch({
        type: BOOKS_GET_LIST_SUCCESS,
        payload: data.items,
      });

    } catch (error) {
      dispatch({
        type: BOOKS_GET_LIST_ERROR,
        payload: error.getMessage(),
      });
    }
  }
}
