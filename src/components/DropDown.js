import React, { useEffect } from 'react'
import { getListOfCountries } from '../redux/actions/countriesActions';
import { connect } from "react-redux";
import { setCountry, getCountryData } from '../redux/actions/currentCountryActions';

const DropDown = ({
    countries,
    getListOfCountries,
    loadingCountries,
    getCountryData,
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
                : <select
                    id="dropdown"
                    onChange={e => {
                        setCountry(e.target.value)
                        getCountryData(country)
                    }}>
                    {countries.map(c => (
                        <option key={c.name} value={c.iso}>{c.name}</option>
                    ))}
                </select>}
        </div >
    )
}

const mapStateToProps = state => {
    return {
        countries: state.countries.listOfCountries,
        loadingCountries: state.countries.loadingCountries,
        country: state.currentCountry.country,
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
