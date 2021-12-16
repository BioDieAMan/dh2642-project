import config from "../../config/covidApiConfig";
import axios from "axios"

export const getGlobalData = () => async dispatch => {
    dispatch({ type: "clearGlobalData" })
    const options = {
        method: "GET",
        url: config.globalUrl,
        params: {},
        headers: config.headers
    }
    try {
        const response = await axios.request(options)
        dispatch({
            type: "getGlobalData",
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