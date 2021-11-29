const initialState = {
    count: 1
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "incrementByOne":
            return {
                ...state,
                count: state.count + 1
            }
        case "decrementByOne":
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

export default counterReducer;