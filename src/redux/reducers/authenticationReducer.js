const initialState = {
    loading: false,
    signupError: null,
    signinError: null,
    signoutError: null
}

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "signupStart":
            return {
                ...state,
                loading: true,
                signupError: null
            }
        case "signupSuccess":
            return {
                ...state,
                loading: false,
            }
        case "signupError":
            return {
                ...state,
                loading: false,
                signupError: action.payload
            }
        case "signinStart":
            return {
                ...state,
                loading: true,
                signinError: null
            }
        case "signinSuccess":
            return {
                ...state,
                loading: false
            }
        case "signinError":
            return {
                ...state,
                loading: false,
                signinError: action.payload
            }
        case "signoutStart":
            return {
                ...state,
                loading: true
            }
        case "signoutSuccess":
            return {
                ...state,
                loading: false
            }
        case "signoutError":
            return {
                ...state,
                loading: false,
                signoutError: action.payload
            }
        default:
            return state
    }
}

export default authenticationReducer;