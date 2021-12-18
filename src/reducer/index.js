import { combineReducers } from "redux";
import gamesReducer from "./gameReducer";
import detailsReducer from "./detailReducer";

const allReducer = combineReducers({
  games: gamesReducer,
  details: detailsReducer,
});

export default allReducer;
