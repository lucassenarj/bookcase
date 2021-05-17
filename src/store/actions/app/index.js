export const APP_LOADING = "APP_LOADING";

export function loading(value){
  return (dispatch) => {
    dispatch({
      type: APP_LOADING,
      payload: value,
    });
  };
};
