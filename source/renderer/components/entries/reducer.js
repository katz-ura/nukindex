const initialState = {
  "selectedId": 0,
  "entrySearchQuery": "",
  "list": []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case "VIDEOS_DATA_LOADED":
      return Object.assign({}, state, {
        "selectedId": action.data[0].videoId,
        "list": action.data.map(item => {
          item.hidden = false;

          return item;
        })
      });

    case "CHANGE_SELECTED_ID":
      return Object.assign({}, state, {
        "selectedId": action.data
      });

    case "CHANGE_QUERY":
      return Object.assign({}, state, {
        "entrySearchQuery": action.data
      });

    default:
      return state;
  }
}
