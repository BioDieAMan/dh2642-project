const initialState = {
    globalData: null,
    loading: false,
    error: null,
}

const globalDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "getGlobalData":
            return {
                ...state,
                globalData: action.payload,
                loading: false
            }
        case "covidError":
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case "clearGlobalData":
            return {
                ...state,
                loading: true,
                globalData: null,
                error: null
            }
        default:
            return state;
    }
}

export default globalDataReducer;