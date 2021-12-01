const initialState = {
    globalCovidNews: null,
    localCovidNews: null,
    loading: false,
    error: null,
}

const covidNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "getGlobalCovidNews":
            return {
                ...state,
                globalCovidNews: action.payload,
                loading: false
            }
        case "getLocalCovidNews":
            return {
                ...state,
                localCovidNews: action.payload,
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
        case "clearLocalCovidNews":
            return {
                ...state,
                loading: true,
                localCovidNews: null,
                error: null
            }
        default:
            return state;
    }
}

export default covidNewsReducer;