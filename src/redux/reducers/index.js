import globalDataReducer from "./globalDataReducer";
import covidNewsReducer from "./covidNewsReducer";
import countryReducer from "./countryReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import authenticationReducer from "./authenticationReducer";
import watchlistReducer from "./watchlistReducer";

const rootReducer = combineReducers({
  globalData: globalDataReducer,
  country: countryReducer,
  covidNews: covidNewsReducer,
  firebase: firebaseReducer,
  authentication: authenticationReducer,
  watchlist: watchlistReducer,
});

export default rootReducer;
