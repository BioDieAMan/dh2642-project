export const addToWatchlist = (country) => (dispatch, getState) => {
    if (getState().watchlist.watchlist.length <= 3) {
        return {
            type: "addCountryToWatchlist",
            payload: country
        }
    }
    else {
        return {
            type: "watchlistError",
            payload: "Watch list is full"
        }
    }
}

export const removeFromWatchlist = (country) => (dispatch, getState) => {
    if (getState().watchlist.watchlist.length === 0) {
        return {
            type: "watchlistError",
            payload: "Watch list is empty"
        }
    }
    else {
        return {
            type: "removeCountryFromWatchlist",
            payload: country
        }
    }
}
