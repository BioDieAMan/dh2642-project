import config from "../../config/covidApiConfig";
import axios from "axios"


export const setCountry = (country) => {
    return {
        type: "setCountry",
        payload: country
    }
}

export const getCountryData = (country) => async dispatch => {
    dispatch({ type: "clearCountryData" })
    const options = {
        method: "GET",
        url: config.countryUrl,
        params: { iso: country },
        headers: config.headers
    }
    try {
        const response = await axios.request(options)
        dispatch({
            type: "getCountryData",
            payload: response.data.data
        })
    }
    catch (e) {
        dispatch({
            type: "currentCountryError",
            payload: e.message
        })
    }
}