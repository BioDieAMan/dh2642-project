import React from 'react';
import { connect } from "react-redux"

const CountryStatistics = ({
    country,
    loadingCurrentCountry,
    countryData
}) => {
    return (
        <div>
            <h2>{country}</h2>
            {loadingCurrentCountry ? <div>loading...</div>
                : countryData ? <div>Total confirmed cases: {countryData[0].confirmed}</div> : <div>nothing</div> /*wrong right now, doesn't add regions together for countries only shows first one*/
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loadingCurrentCountry: state.currentCountry.loadingCurrentCountry,
        country: state.currentCountry.country,
        countryData: state.currentCountry.countryData
    }
}



export default connect(mapStateToProps)(CountryStatistics)

