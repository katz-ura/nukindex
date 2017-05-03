import { combineReducers } from "redux";
import actressRankingReducer from "./components/ranking-actress/reducer";
import entriesReducer from "./components/entries/reducer";

export default combineReducers({
  "actressRanking": actressRankingReducer,
  "entries": entriesReducer
});
