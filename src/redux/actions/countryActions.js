import config from "../../config/covidApiConfig";
import vacConfig from "../../config/vaccinatedDataConfig"
import axios from "axios";
import dateformat from "dateformat";
import { persistenceUpdateCurrent, persistenceUpdateSelected } from "../../firebasePersistence";

export const setCountry = (country) => (dispatch, getState) => {
    if (Object.keys(getState().country.listOfCountries).length === 0 && !getState().country.loadingCountries) {
        dispatch(getListOfCountries())
    }
    dispatch({
        type: "setCountry",
        payload: country
    })
    dispatch(persistenceUpdateCurrent())
}


const sortCountries = (a, b) => {
    return (a.name < b.name) ? -1 : (b.name < a.name) ? 1 : 0
}

export const getListOfCountries = () => async (dispatch, getState) => {
    if (Object.keys(getState().country.listOfCountries).length === 0 && !getState().country.loadingCountries) {
        if (!getState().country.loadingCountries) {
            dispatch({
                type: "startSearchListOfCountries"
            })
            const options = {
                method: "GET",
                url: config.regionsUrl,
                params: {},
                headers: config.headers
            }
            try {
                const response = await axios.request(options)
                const filteredCountries = response.data.data.filter(country => (
                    country.name !== "Cruise Ship"
                    && country.name !== "Diamond Princess"
                    && country.name !== "MS Zaandam"
                    && country.name !== "Others"
                    && country.name !== "Reunion"
                ))
                const sortedCountries = filteredCountries.sort(sortCountries)
                const sortedCountriesObject = sortedCountries.reduce((obj, item) => (obj[item.iso] = item.name, obj), {})
                dispatch({
                    type: "getListOfCountries",
                    payload: sortedCountriesObject
                })
            }
            catch (e) {
                dispatch({
                    type: "listOfCountriesError",
                    payload: e.message
                })
            }
        }
    }
}


export const getCurrentData = (country) => async (dispatch, getState) => {
    if (!getState().country.currentData[country] && country && !getState().country.loadingCurrent[country]) {
        dispatch({
            type: "startSearchCurrentData",
            payload: country
        })
        const options = {
            method: "GET",
            url: config.countryUrl,
            params: { iso: country },
            headers: config.headers
        }
        const vacOptions = {
            method: "GET",
            url: vacConfig.homeUrl,
            params: { iso: country },
            headers: vacConfig.headers
        }
        try {
            const response = await axios.request(options)
            const vacResponse = await axios.request(vacOptions)
            const vacdata = vacResponse.data.slice(-1)[0];
            const aggregatedData = {
                countryName: response.data.data[0].region.name,
                confirmed: 0,
                deaths: 0,
                confirmed_diff: 0,
                deaths_diff: 0,
                vaccinated: 0,
                vaccinated_per_hundred: 0
            }
            response.data.data.forEach((region) => {
                aggregatedData.confirmed += region.confirmed;
                aggregatedData.deaths += region.deaths;
                aggregatedData.confirmed_diff += region.confirmed_diff;
                aggregatedData.deaths_diff += region.deaths_diff;
            })
            aggregatedData.vaccinated += parseInt(vacdata.people_fully_vaccinated);
            aggregatedData.vaccinated_per_hundred += parseFloat(vacdata.people_fully_vaccinated_per_hundred);
            if (aggregatedData.confirmed === 0) {
                dispatch({
                    type: "getCurrentData",
                    payload: [country, null]
                })
            }
            else {
                dispatch({
                    type: "getCurrentData",
                    payload: [country, aggregatedData]
                })
            }
        }
        catch (e) {
            dispatch({
                type: "countryError",
                payload: [e.message, country]
            })
        }
    }

}

export const getMonthlyData = (country) => async (dispatch, getState) => {
    if (!getState().country.monthlyData[country] && country && !getState().country.loadingMonthly[country]) {
        dispatch({
            type: "startSearchMonthlyData",
            payload: country
        })
        const date = new Date()
        date.setDate(date.getDate() - 2)
        let options = {
            method: "GET",
            url: config.countryUrl,
            params: {
                iso: country,
                date: ""
            },
            headers: config.headers
        }
        try {
            const monthlyData = {};
            for (let i = 0; i < 15; i++) {
                options = { ...options, params: { ...options.params, date: dateformat(date, "isoDate") } }
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
                monthlyData[date] = aggregatedData
                date.setDate(date.getDate() - 2)
            }
            dispatch({
                type: "getMonthlyData",
                payload: [country, monthlyData]
            })
        }
        catch (e) {
            dispatch({
                type: "countryError",
                payload: e.message
            })
        }
    }
}

export const getSixMonthData = (country) => async (dispatch, getState) => {
    if (!getState().country.sixMonthData[country] && country && !getState().country.loadingSixMonth[country]) {
        dispatch({
            type: "startSearchSixMonthData",
            payload: country
        })
        const date = new Date()
        date.setDate(date.getDate() - 2)
        let options = {
            method: "GET",
            url: config.countryUrl,
            params: {
                iso: country,
                date: dateformat(date, "isoDate")
            },
            headers: config.headers
        }
        try {
            const sixMonthData = {};
            for (let i = 0; i < 15; i++) {
                options = { ...options, params: { ...options.params, date: dateformat(date, "isoDate") } }
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
                sixMonthData[date] = aggregatedData
                date.setDate(date.getDate() - 12)
            }
            dispatch({
                type: "getSixMonthData",
                payload: [country, sixMonthData]
            })

        }
        catch (e) {
            dispatch({
                type: "countryError",
                payload: e.message
            })
        }
    }
}


export const addSelectedCountry = (country) => (dispatch, getState) => {
    dispatch({
        type: "addSelectedCountry",
        payload: country
    })
    dispatch(persistenceUpdateSelected())
}

export const removeSelectedCountry = (country) => (dispatch, getState) => {
    dispatch({
        type: "removeSelectedCountry",
        payload: country
    })
    dispatch(persistenceUpdateSelected())
}

export const populateSelectedCountries = (countries) => {
    return {
        type: "populateSelectedCountries",
        payload: countries
    }
}

export const clearSelectedCountries = () => {
    return {
        type: "clearSelectedCountries"
    }
}