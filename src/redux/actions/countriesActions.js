import config from "../../config/covidApiConfig";
import axios from "axios"

export const getListOfCountries = () => async dispatch => {
    const options = {
        method: "GET",
        url: config.regionsUrl,
        params: {},
        headers: config.headers
    }
    try {
        const response = await axios.request(options)
        dispatch({
            type: "getListOfCountries",
            payload: response.data.data
        })
    }
    catch (e) {
        dispatch({
            type: "covidError",
            payload: e.message
        })
    }
}