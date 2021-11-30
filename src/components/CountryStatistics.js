import React from 'react';
import { connect } from "react-redux"

const CountryStatistics = ({
    currentCountry,
    loadingCurrent,
    currentData
}) => {
    return (
        <div>
            <h3>Current stats</h3>
            {loadingCurrent ? <div>loading...</div>
                : currentData[currentCountry] ? <div>Total confirmed cases: {currentData[currentCountry].confirmed}</div> : <div></div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loadingCurrent: state.country.loadingCurrent,
        currentCountry: state.country.currentCountry,
        currentData: state.country.currentData
    }
}



export default connect(mapStateToProps)(CountryStatistics)

