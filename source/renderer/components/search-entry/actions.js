export default {
  "changeQuery": data => {
    return dispatch => {
      dispatch({
        "type": "CHANGE_ENTRY_SEARCH_QUERY",
        "data": data
      });
    };
  }
}
