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
        case "getListOfCountries":
            return {
                ...state,
                listOfCountries: action.payload,
            }
        case "setCountry":
            return {
                ...state,
                currentCountry: action.payload
            }
        case "getCurrentData":
            return {
                ...state,
                currentData: { ...state.currentData, [state.currentCountry]: action.payload },
                loadingCurrent: false
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
                monthlyData: { ...state.monthlyData, [state.currentCountry]: action.payload },
                loadingMonthly: false
            }
        case "getSixMonthData":
            return {
                ...state,
                sixMonthData: { ...state.sixMonthData, [state.currentCountry]: action.payload },
                loadingSixMonth: false
            }
        case "countryError":
            return {
                ...state,
                loadingCurrent: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default countryReducer