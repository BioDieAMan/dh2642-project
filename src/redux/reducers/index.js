import counterReducer from "./counterReducer";
import countriesReducer from "./countriesReducer";
import globalDataReducer from "./globalDataReducer";
import currentCountryReducer from "./currentCountryReducer";
import globalCovidNewsReducer from "./globalCovidNewsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: counterReducer,

    countries: countriesReducer,
    globalData: globalDataReducer,
    currentCountry: currentCountryReducer,

    globalCovidNews: globalCovidNewsReducer
})

export default rootReducer