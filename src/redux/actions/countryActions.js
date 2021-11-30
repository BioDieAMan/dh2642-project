import config from "../../config/covidApiConfig";
import axios from "axios"


export const setCountry = (country) => {
    return {
        type: "setCountry",
        payload: country
    }
}

const sortCountries = (a, b) => {
    return (a.name < b.name) ? -1 : (b.name < a.name) ? 1 : 0
}

export const getListOfCountries = () => async dispatch => {
    const options = {
        method: "GET",
        url: config.regionsUrl,
        params: {},
        headers: config.headers
    }
    try {
        const response = await axios.request(options)
        const sortedCountries = response.data.data.sort(sortCountries)
        dispatch({
            type: "getListOfCountries",
            payload: sortedCountries
        })
    }
    catch (e) {
        dispatch({
            type: "covidError",
            payload: e.message
        })
    }
}

export const getCountryData = (country) => async (dispatch, getState) => {
    if (!getState().country.countryData[country]) {
        dispatch({ type: "startSearchCountry" })
        const options = {
            method: "GET",
            url: config.countryUrl,
            params: { iso: country },
            headers: config.headers
        }
        try {
            const response = await axios.request(options)
            const aggregatedData = {
                confirmed: 0,
                deaths: 0,
                confirmed_diff: 0,
                deaths_diff: 0
            }
            response.data.data.forEach((region) => {
                aggregatedData.confirmed += region.confirmed;
                aggregatedData.deaths += region.deaths;
                aggregatedData.confirmed_diff += region.confirmed_diff;
                aggregatedData.deaths_diff += region.deaths_diff;
            })
            dispatch({
                type: "getCountryData",
                payload: aggregatedData
            })
        }
        catch (e) {
            dispatch({
                type: "currentCountryError",
                payload: e.message
            })
        }
    }

}