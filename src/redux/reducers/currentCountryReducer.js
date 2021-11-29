const initialState = {
    country: null,
    countryData: null,
    loadingCurrentCountry: false,
    error: null
}

const currentCountryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setCountry":
            return {
                ...state,
                country: action.payload
            }
        case "getCountryData":
            return {
                ...state,
                countryData: action.payload,
                loadingCurrentCountry: false
            }
        case "clearCountryData":
            return {
                ...state,
                loadingCurrentCountry: true,
                countryData: null,
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