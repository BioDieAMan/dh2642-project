import { setCountry } from "./redux/actions/countryActions";
import { clearWatchlist, populateWatchlist } from "./redux/actions/watchlistActions";

export const persistenceUpdateCurrent = () => (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const userId = getState().firebase.auth.uid
    if (userId) {
        const currentCountry = getState().country.currentCountry
        firebase.database().ref(`${userId}/current`).set({
            current: currentCountry
        })
    }
}

export const persistenceUpdateWatchlist = () => (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const userId = getState().firebase.auth.uid
    if (userId) {
        const watchlistCountries = getState().watchlist.watchlist
        firebase.database().ref(`${userId}/watchlist`).set({
            watchlist: watchlistCountries
        })

    }
}

export const persistenceLoader = () => (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const userId = getState().firebase.auth.uid
    if (userId) {
        firebase.database().ref(`${userId}`).on("value", data => {
            if (data.val()?.current?.current) {
                dispatch(setCountry(data.val().current.current))
            }
            if (data.val()?.watchlist?.watchlist) {
                dispatch(populateWatchlist(data.val().watchlist.watchlist))
            }
        })
    }
    else {
        dispatch(setCountry(""))
        dispatch(clearWatchlist())
    }
}