import { persistenceUpdateWatchlist } from "../../firebasePersistence"

export const addToWatchlist = (country) => (dispatch, getState) => {
    dispatch({
        type: "addCountryToWatchlist",
        payload: country
    })
    dispatch(persistenceUpdateWatchlist())
}

export const populateWatchlist = (countries) => (dispatch) => {
    dispatch({ type: "populateWatchlist", payload: countries })
    dispatch(persistenceUpdateWatchlist())
}

export const clearWatchlist = () => {
    return {
        type: "clearWatchlist"
    }
}

export const removeFromWatchlist = (country) => (dispatch) => {
    dispatch({
        type: "removeCountryFromWatchlist",
        payload: country
    })
    dispatch(persistenceUpdateWatchlist())
}
