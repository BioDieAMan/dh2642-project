import counterReducer from "./counterReducer";
// import countriesReducer from "./countriesReducer";
//import detailsReducer from "./detailsReducer";
import globalDataReducer from "./globalDataReducer";
import countryReducer from "./countryReducer";
import { combineReducers } from "redux";
import twitterReducer from "./twitterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  // countries: countriesReducer,
  globalData: globalDataReducer,
  country: countryReducer,
  twitter: twitterReducer,
  //details: detailsReducer
});

export default rootReducer;
