const initialState = {
    listOfCountries: null,
    currentCountry: null,
    countryData: {},
    loadingCurrentCountry: false,
    error: null
}

const currentCountryReducer = (state = initialState, action) => {
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
        case "getCountryData":
            return {
                ...state,
                countryData: { ...state.countryData, [state.currentCountry]: action.payload },
                loadingCurrentCountry: false
            }
        case "startSearchCountry":
            return {
                ...state,
                loadingCurrentCountry: true,
                error: null
            }
        case "currentCountryError":
            return {
                ...state,
                loadingCurrentCountry: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default currentCountryReducer