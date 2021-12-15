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
    if (getState().watchlist.testLoad) return;

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
    if (getState().watchlist.testLoad) return;
    const firebase = getFirebase()
    const userId = getState().firebase.auth.uid
    if (userId) {
        const selectedCountries = getState().country.selectedCountries
        firebase.database().ref(`top/${userId}/selected`).set({
            selected: selectedCountries
        })
    }
}

export const persistenceLoader = () => (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const userId = getState().firebase.auth.uid
    if (userId) {
        try {
            firebase.database().ref(`top/${userId}`).on("value", data => {
                if (data.val()?.current?.current) {
                    dispatch(setCountry(data.val().current.current))
                }
                if (data.val()?.watchlist?.watchlist) {
                    dispatch(populateWatchlist(data.val().watchlist.watchlist))
                }
                if (data.val()?.selected?.selected) {
                    dispatch(populateSelectedCountries(data.val().selected.selected))
                }
            })
        }
        catch (e) {
            console.log(e.message)
        }
    }
}

export const updateFromFirebase = () => (dispatch, getState) => {
    const data = getState().firebase.data.top
    const uid = getState().firebase.auth.uid
    if (data) {
        data[uid]?.current.current ? dispatch(setCountry(data[uid].current.current)) : dispatch(setCountry(null));
        data[uid]?.selected?.selected ? dispatch(populateSelectedCountries(data[uid].selected.selected)) : dispatch(populateSelectedCountries([]));
        data[uid]?.watchlist?.watchlist ? dispatch(populateWatchlist(data[uid].watchlist.watchlist)) : dispatch(populateWatchlist([]))
    }
}
