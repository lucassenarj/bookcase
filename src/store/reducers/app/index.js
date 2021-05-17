import { APP_LOADING } from "store/actions";

const initialState = {
  loading: false,
};

const app = (state = initialState, action) => {
  switch(action.type) {
    case APP_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default: 
      return state;
  }
};

export default app;
