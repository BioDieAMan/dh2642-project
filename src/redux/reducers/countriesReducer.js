const initialState = {
    listOfCountries: null,
    loadingCountries: true,
    error: null
}

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "getListOfCountries":
            return {
                ...state,
                listOfCountries: action.payload,
                loadingCountries: false
            }
        case "countriesError":
            return {
                ...state,
                loadingCountries: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default countriesReducer;