import React, { useEffect } from 'react';
import { getListOfCountries, getMonthlyData, setCountry } from '../redux/actions/countryActions';
import { connect } from "react-redux"

const MonthlyDataTest = ({
    countries,
    getListOfCountries,
    setCountry,
    getMonthlyData
}) => {
    useEffect(() => {
        if (countries)
            return;
        getListOfCountries()
    }, [])
    return (
        <div>
            {!countries ? <div></div>
                : <select
                    id="dropdown"
                    onChange={e => {
                        setCountry(e.target.value)
                        getMonthlyData(e.target.value)
                    }}>
                    <option hidden></option>
                    {countries.map(c => (
                        <option key={c.name} value={c.iso}>{c.name}</option>
                    ))}
                </select>}
        </div >
    )
}

const mapStateToProps = state => {
    return {
        countries: state.country.listOfCountries,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListOfCountries: () => dispatch(getListOfCountries()),
        setCountry: (country) => dispatch(setCountry(country)),
        getMonthlyData: (country) => dispatch(getMonthlyData(country))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyDataTest)

