const initialState = {
  "selectedId": 0,
  "entrySearchQuery": "",
  "videos": [],
  "actresses": []
};

export default function reducer(state = initialState, action) {
  console.log("reducer: ", action);
  
  switch(action.type) {
    case "VIDEOS_DATA_LOADED":
      return Object.assign({}, state, {
        "videos": action.data.map(item => {
          item.hidden = false;

          return item;
        })
      });

    case "ACTRESSES_DATA_LOADED":
      return Object.assign({}, state, {
        "actresses": action.data
      });

    case "CHANGE_SELECTED_ID":
      return Object.assign({}, state, {
        "selectedId": action.data
      });

    case "CHANGE_ENTRY_SEARCH_QUERY":
      return Object.assign({}, state, {
        "entrySearchQuery": action.data
      });

    default:
      return state;
  }
}
