import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getListOfCountries, addSelectedCountry, removeSelectedCountry, addWatchCountry, removeWatchCountry } from '../redux/actions/countryActions';

const CountryToggle = ({
    countries,
    getListOfCountries,
    selectedCountries,
    addSelectedCountry,
    removeSelectedCountry,
    watchCountries,
    addWatchCountry,
    removeWatchCountry,
    
}) => {
    useEffect(() => {
        if (countries)
            return;
        getListOfCountries()
    }, [])
    return (
        <div>
            <input className="countrySearch" placeholder="Search for country..."/>
            {!countries ? <div></div>:
                <div className="countryContainer">{Object.keys(countries).map(cKey => selectedCountries.some(scKey => scKey === cKey)?
                    <div    className={ "selectedCountryItem" }
                            key={countries[cKey]}
                            value={cKey}
                            onClick={() => removeSelectedCountry(cKey)}>
                        <p className="countryText">{countries[cKey]}</p>
                        {watchCountries.some(wcKey => wcKey === cKey)?
                            <p className="countryStar" onClick={() => removeWatchCountry(cKey)}>&#9733;</p>:
                            <p className="countryStar" onClick={() => addWatchCountry(cKey)}>&#9734;</p>
                        }
                    </div>:
                    <div    className={ "countryItem" }
                            key={countries[cKey]}
                            value={cKey}
                            onClick={() => addSelectedCountry(cKey)}>
                        <p className="countryText">{countries[cKey]}</p>
                        {watchCountries.some(wcKey => wcKey === cKey)?
                            <p className="countryStar" onClick={() => removeWatchCountry(cKey)}>&#9733;</p>:
                            <p className="countryStar" onClick={() => addWatchCountry(cKey)}>&#9734;</p>
                        }
                    </div>
                    )}

                    
                </div>
            }
        </div >
    )
}

const mapStateToProps = state => {
    return {
        countries: state.country.listOfCountries,
        selectedCountries: state.country.selectedCountries,
        watchCountries: state.country.watchCountries,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListOfCountries: () => dispatch(getListOfCountries()),
        addSelectedCountry: (country) => dispatch(addSelectedCountry(country)),
        removeSelectedCountry: (country) => dispatch(removeSelectedCountry(country)),
        addWatchCountry: (country) => dispatch(addWatchCountry(country)),
        removeWatchCountry: (country) => dispatch(removeWatchCountry(country)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryToggle)