export default {
  "changeSelectedId": data => {
    return dispatch => {
      dispatch({
        "type": "CHANGE_SELECTED_ID",
        "data": data
      });
    };
  }
}
