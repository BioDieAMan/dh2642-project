import counterReducer from "./counterReducer";
import globalDataReducer from "./globalDataReducer";
import covidNewsReducer from "./covidNewsReducer";
import countryReducer from "./countryReducer";
import { combineReducers } from "redux";
import twitterReducer from "./twitterReducer";
import { firebaseReducer } from "react-redux-firebase";
import authenticationReducer from "./authenticationReducer";


const rootReducer = combineReducers({
  counter: counterReducer,
  globalData: globalDataReducer,
  country: countryReducer,
  covidNews: covidNewsReducer,
  twitter: twitterReducer,
  firebase: firebaseReducer,
  authentication: authenticationReducer
});

export default rootReducer;
