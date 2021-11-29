import config from "../../config/covidApiConfig";
import axios from "axios"

export const getGlobalData = () => async dispatch => {
    dispatch({ type: "clearGlobalData" })
    // const date = new Date();
    // date.setDate(date.getDate() - 1);
    // const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
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