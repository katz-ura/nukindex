export default {
  "changeQuery": queryString => {
    return dispatch => {
      dispatch({
        "type": "CHANGE_QUERY",
        "data": queryString
      });
    };
  }
}
