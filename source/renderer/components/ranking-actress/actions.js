export default {
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
