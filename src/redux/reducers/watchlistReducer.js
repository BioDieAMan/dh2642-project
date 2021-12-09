const initialState = {
    watchlist: ["SWE"],
    watchlistError: null
}

const watchlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addCountryToWatchlist":
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload]
            }
        case "removeCountryFromWatchlist":
            return {
                ...state,
                watchLlist: state.watchlist.filter(country => country !== action.payload)
            }
        case "watchlistError":
            return {
                ...state,
                watchlistError: action.payload
            }
        default:
            return state
    }
}

export default watchlistReducer