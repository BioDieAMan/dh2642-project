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
    if (userData) {
        data.top[uid].current.current ? dispatch(setCountry(data.top[uid].current.current)) : dispatch(setCountry(null));
        data.top[uid].selected?.selected ? dispatch(populateSelectedCountries(data.top[uid].selected.selected)) : dispatch(populateSelectedCountries([]));
        data.top[uid].watchlist?.watchlist ? dispatch(populateWatchlist(data.top[uid].watchlist.watchlist)) : dispatch(populateWatchlist([]))
    }
}
