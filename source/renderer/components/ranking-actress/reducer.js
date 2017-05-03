const initialState = {
  "list": []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case "ACTRESSES_DATA_LOADED":
      return Object.assign({}, state, {
        "list": action.data
      });

    default:
      return state;
  }
}
