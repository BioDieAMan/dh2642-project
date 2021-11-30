import config from "../../config/covidNewsApiConfig";
import axios from "axios"

export const getGlobalCovidNews = () => async dispatch => {
    dispatch({ type: "clearGlobalNews" })
    
    const options = {
        method: "GET",
        url: config.searchUrl,
        params: {q: 'covid', setLang: 'EN',},
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