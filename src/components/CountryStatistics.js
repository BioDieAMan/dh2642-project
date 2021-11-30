import React from 'react';
import { connect } from "react-redux"

const CountryStatistics = ({
    currentCountry,
    loadingCurrentCountry,
    countryData
}) => {
    return (
        <div>
            <h2>{currentCountry}</h2>
            {loadingCurrentCountry ? <div>loading...</div>
                : countryData[currentCountry] ? <div>Total confirmed cases: {countryData[currentCountry].confirmed}</div> : <div></div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loadingCurrentCountry: state.country.loadingCurrentCountry,
        currentCountry: state.country.currentCountry,
        countryData: state.country.countryData
    }
}



export default connect(mapStateToProps)(CountryStatistics)

