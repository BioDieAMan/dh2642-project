const initialState = {
    listOfCountries: null,
    currentCountry: null,
    selectedCountries: [],
    currentData: {},
    monthlyData: {},
    sixMonthData: {},
    loadingCurrent: false,
    loadingMonthly: false,
    loadingSixMonth: false,
    error: null
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "startSearchListOfCountries":
            return {
                ...state,
                loadingCountries: true
            }
        case "getListOfCountries":
            return {
                ...state,
                listOfCountries: action.payload,
                loadingCountries: false
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
                loadingCurrent: false
            }
        case "startSearchCurrentData":
            return {
                ...state,
                loadingCurrent: true,
                error: null
            }
        case "startSearchMonthlyData":
            return {
                ...state,
                loadingMonthly: true,
                error: null
            }
        case "startSearchSixMonthData":
            return {
                ...state,
                loadingSixMonth: true,
                error: null
            }
        case "getMonthlyData":
            return {
                ...state,
                monthlyData: { ...state.monthlyData, [action.payload[0]]: action.payload[1] },
                loadingMonthly: false
            }
        case "getSixMonthData":
            return {
                ...state,
                sixMonthData: { ...state.sixMonthData, [action.payload[0]]: action.payload[1] },
                loadingSixMonth: false
            }
        case "countryError":
            return {
                ...state,
                loadingCurrent: false,
                error: action.payload
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
        default:
            return state;
    }
}

export default countryReducer