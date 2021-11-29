import React, { useEffect } from 'react'
import { getListOfCountries } from '../redux/actions/countriesActions';
import { connect } from "react-redux";
import { setCountry, getCountryData } from '../redux/actions/currentCountryActions';

const DropDown = ({
    countries,
    getListOfCountries,
    loadingCountries,
    getCountryData,
    loadingCurrentCountry,
    countryData,
    country,
    setCountry
}) => {
    useEffect(() => {
        if (countries)
            return;
        getListOfCountries()
    }, [])
    return (
        <div>
            {loadingCountries ? <div>loading...</div>
                : <select id="dropdown">
                    {countries.map(c => (
                        <option key={c.name} value={c.iso}>{c.name}</option>
                    ))}
                </select>}
            <button onClick={() => {
                setCountry(document.getElementById("dropdown").value)
                getCountryData(country)
            }}>Set country</button>
            <h2>{country}</h2>
            {loadingCurrentCountry ? <div>loading...</div>
                : countryData ? <div>Total confirmed cases: {countryData[0].confirmed}</div> : <div>nothing</div> /*wrong right now, doesn't add regions together for countries only shows first one*/
            }
        </div >
    )
}

const mapStateToProps = state => {
    return {
        countries: state.countries.listOfCountries,
        loadingCountries: state.countries.loadingCountries,
        loadingCurrentCountry: state.currentCountry.loadingCurrentCountry,
        country: state.currentCountry.country,
        countryData: state.currentCountry.countryData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListOfCountries: () => dispatch(getListOfCountries()),
        setCountry: (country) => dispatch(setCountry(country)),
        getCountryData: (country) => dispatch(getCountryData(country))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDown)
