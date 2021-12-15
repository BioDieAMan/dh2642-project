import { setCountry, populateSelectedCountries } from "./redux/actions/countryActions";
import { populateWatchlist } from "./redux/actions/watchlistActions";

export const persistenceUpdateCurrent = () => (dispatch, getState, { getFirebase }) => {
    if (getState().watchlist.testLoad) return;

    const firebase = getFirebase()
    const userId = getState().firebase.auth.uid
    if (userId) {
        const currentCountry = getState().country.currentCountry
        firebase.database().ref(`top/${userId}/current`).set({
            current: currentCountry
        })
    }
}

export const persistenceUpdateWatchlist = () => (dispatch, getState, { getFirebase }) => {

    const firebase = getFirebase()
    const userId = getState().firebase.auth.uid
    if (userId) {
        const watchlistCountries = getState().watchlist.watchlist
        firebase.database().ref(`top/${userId}/watchlist`).set({
            watchlist: watchlistCountries
        })
    }
}

export const persistenceUpdateSelected = () => (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const userId = getState().firebase.auth.uid
    if (userId) {
        const selectedCountries = getState().country.selectedCountries
        firebase.database().ref(`top/${userId}/selected`).set({
            selected: selectedCountries
        })
    }
}

export const updateFromFirebase = () => (dispatch, getState) => {
    const data = getState().firebase.data
    const uid = getState().firebase.auth.uid
    let userData = null;

    if (uid in data.top) {
        userData = data.top[uid]
    }
    else if (uid) {
        dispatch(setCountry(null))
        dispatch(populateSelectedCountries([]))
        dispatch(populateWatchlist([]))
    }
    if (userData) {
        Object.keys(userData).includes("current") ? dispatch(setCountry(userData.current.current)) : dispatch(setCountry(null));
        Object.keys(userData).includes("selected") ? dispatch(populateSelectedCountries(userData.selected.selected)) : dispatch(populateSelectedCountries([]))
        Object.keys(userData).includes("watchlist") ? dispatch(populateWatchlist(userData.watchlist.watchlist)) : dispatch(populateWatchlist([]))
    }
}
