export default {
  "loadVideosData": () => {
    return dispatch => {
      fetch("./data/videos.json").then(response => {
        return response.json();
      }).then(data => {
        dispatch({
          "type": "VIDEOS_DATA_LOADED",
          "data": data
        });
      });
    };
  },
  "changeSelectedId": selectedId => {
    return dispatch => {
      dispatch({
        "type": "CHANGE_SELECTED_ID",
        "data": selectedId
      });
    };
  }
}
