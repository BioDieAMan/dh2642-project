const initialState = {
    listOfCountries: null,
    currentCountry: null,
    currentData: {},
    monthlyData: {},
    loadingCurrent: false,
    loadingMonthly: false,
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
        case "getMonthlyData":
            return {
                ...state,
                monthlyData: { ...state.monthlyData, [state.currentCountry]: action.payload },
                loadingMonthly: false
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