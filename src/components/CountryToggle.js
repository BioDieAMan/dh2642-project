import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getListOfCountries, addSelectedCountry, removeSelectedCountry } from '../redux/actions/countryActions';

const CountryToggle = ({
    countries,
    getListOfCountries,
    selectedCountries,
    addSelectedCountry,
    removeSelectedCountry,
}) => {
    useEffect(() => {
        if (countries)
            return;
        getListOfCountries()
    }, [])
    return (
        <div>
            {!countries ? <div></div>:
            <div className="countryContainer">{countries.map(c => (selectedCountries.some(sc => sc.name === c.name)?
                <div    className={ "selectedCountryItem" }
                        key={c.name}
                        value={c.iso}
                        onClick={() => removeSelectedCountry(c)}>
                    <p>{c.name}</p>
                </div>:
                <div    className={ "countryItem" }
                        key={c.name}
                        value={c.iso}
                        onClick={() => addSelectedCountry(c)}>
                    <p>{c.name}</p>
            </div>
            ))}
            </div>}
        </div >
    )
}

const mapStateToProps = state => {
    return {
        countries: state.country.listOfCountries,
        selectedCountries: state.country.selectedCountries,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListOfCountries: () => dispatch(getListOfCountries()),
        addSelectedCountry: (country) => dispatch(addSelectedCountry(country)),
        removeSelectedCountry: (country) => dispatch(removeSelectedCountry(country)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryToggle)