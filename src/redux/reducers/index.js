import counterReducer from "./counterReducer";
import countriesReducer from "./countriesReducer";
import globalDataReducer from "./globalDataReducer";
import currentCountryReducer from "./currentCountryReducer";
import { combineReducers } from "redux";
import twitterReducer from "./twitterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  countries: countriesReducer,
  globalData: globalDataReducer,
  currentCountry: currentCountryReducer,
  twitter: twitterReducer,
});

export default rootReducer;
