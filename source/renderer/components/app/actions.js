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

  "loadActressesData": () => {
    return dispatch => {
      fetch("./data/actresses.json").then(response => {
        return response.json();
      }).then(data => {
        dispatch({
          "type": "ACTRESSES_DATA_LOADED",
          "data": data
        });
      });
    };
  }
}
