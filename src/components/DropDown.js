import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { setCountry, getCurrentData, getMonthlyData, getSixMonthData, getListOfCountries } from '../redux/actions/countryActions';

const DropDown = ({
    countries,
    getListOfCountries,
    getCurrentData,
    getMonthlyData,
    getSixMonthData,
    setCountry,
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
                        getCurrentData(e.target.value)
                        getMonthlyData(e.target.value)
                        getSixMonthData(e.target.value)
                    }}>
                    <option hidden></option>
                    {Object.entries(countries).map(c => (
                        <option key={c[1]} value={c[0]}>{c[1]}</option>
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
        getCurrentData: (country) => dispatch(getCurrentData(country)),
        getMonthlyData: (country) => dispatch(getMonthlyData(country)),
        getSixMonthData: (country) => dispatch(getSixMonthData(country))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDown)
