import config from "../../config/covidNewsApiConfig";
import axios from "axios"

export const getGlobalCovidNews = () => async dispatch => {
    dispatch({ type: "clearGlobalCovidNews" })

    const options = {
        method: "GET",
        url: config.searchUrl,
        params: {
            q: 'covid',
            count: '4',
            setLang: 'EN',
            originalImg: 'true',
            offset: '0',
            safeSearch: 'Off'
        },
        headers: config.headers
    }
    try {
        const response = await axios.request(options)
        dispatch({
            type: "getGlobalCovidNews",
            payload: response.data.value
        })
    }
    catch (e) {
        dispatch({
            type: "covidNewsError",
            payload: e.message
        })
    }
}

export const getLocalCovidNews = () => async (dispatch, getState) => {
    dispatch({ type: "clearLocalNews" })

    const options = {
        method: "GET",
        url: config.searchUrl,
        params: {
            q: `covid ${getState().country.listOfCountries?.[getState().country.currentCountry]}`,
            count: '2',
            setLang: 'en',
            //mkt: 'sv-SE',
            //cc: 'RU',
            //originalImg: 'true',
            offset: '0',
            safeSearch: 'Off'
        },
        headers: config.headers
    }
    try {
        const response = await axios.request(options)
        dispatch({
            type: "getLocalCovidNews",
            payload: response.data.value
        })
    }
    catch (e) {
        dispatch({
            type: "covidNewsError",
            payload: e.message
        })
    }
}