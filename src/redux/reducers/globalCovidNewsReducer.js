const initialState = {
    globalCovidNews: null,
    loading: false,
    error: null,
}

const globalCovidNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "getGlobalCovidNews":
            return {
                ...state,
                globalCovidNews: action.payload,
                loading: false
            }
        case "covidNewsError":
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case "clearGlobalCovidNews":
            return {
                ...state,
                loading: true,
                globalCovidNews: null,
                error: null
            }
        default:
            return state;
    }
}

export default globalCovidNewsReducer;