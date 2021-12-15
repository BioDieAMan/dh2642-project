const initialState = {
    listOfCountries: {},
    loadingCountries: false,
    listError: null,
    currentCountry: null,
    selectedCountries: [],
    currentData: {},
    monthlyData: {},
    sixMonthData: {},
    loadingCurrent: {},
    loadingMonthly: {},
    loadingSixMonth: {},
    error: null
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "startSearchListOfCountries":
            return {
                ...state,
                loadingCountries: true,
                listError: null
            }
        case "getListOfCountries":
            return {
                ...state,
                listOfCountries: action.payload,
                loadingCountries: false,
                listError: null
            }
        case "listOfCountriesError":
            return {
                ...state,
                listError: action.payload
            }
        case "setCountry":
            return {
                ...state,
                currentCountry: action.payload
            }
        case "getCurrentData":
            return {
                ...state,
                currentData: { ...state.currentData, [action.payload[0]]: action.payload[1] },
                loadingCurrent: { ...state.loadingCurrent, [action.payload[0]]: false }
            }
        case "startSearchCurrentData":
            return {
                ...state,
                loadingCurrent: { ...state.loadingCurrent, [action.payload]: true },
                error: null
            }
        case "startSearchMonthlyData":
            return {
                ...state,
                loadingMonthly: { ...state.loadingMonthly, [action.payload]: true },
                error: null
            }
        case "startSearchSixMonthData":
            return {
                ...state,
                loadingSixMonth: { ...state.loadingSixMonth, [action.payload]: true },
                error: null
            }
        case "getMonthlyData":
            return {
                ...state,
                monthlyData: { ...state.monthlyData, [action.payload[0]]: action.payload[1] },
                loadingMonthly: { ...state.loadingMonthly, [action.payload[0]]: false }
            }
        case "getSixMonthData":
            return {
                ...state,
                sixMonthData: { ...state.sixMonthData, [action.payload[0]]: action.payload[1] },
                loadingSixMonth: { ...state.loadingSixMonth, [action.payload[0]]: false }
            }
        case "countryError":
            return {
                ...state,
                loadingCurrent: { ...state.loadingCurrent, [action.payload[1]]: false },
                error: action.payload[0]
            }
        case "addSelectedCountry":
            return {
                ...state,
                selectedCountries: [...state.selectedCountries, action.payload]
            }
        case "removeSelectedCountry":
            return {
                ...state,
                selectedCountries: state.selectedCountries.filter(element => element !== action.payload)
            }
        case "clearSelectedCountries":
            return {
                ...state,
                selectedCountries: []
            }
        case "populateSelectedCountries":
            return {
                ...state,
                selectedCountries: action.payload
            }
        default:
            return state;
    }
}

export default countryReducer