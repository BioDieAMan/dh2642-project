import React from 'react';
import { connect } from "react-redux"

const MonthlyStatistics = ({
    currentCountry,
    loadingMonthly,
    monthlyData
}) => {
    return (
        <div>
            <h3>Monthly stats</h3>
            {loadingMonthly ? <div>loading...</div>
                : monthlyData[currentCountry] ? <div>data exists</div> : <div></div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loadingMonthly: state.country.loadingMonthly,
        currentCountry: state.country.currentCountry,
        monthlyData: state.country.monthlyData
    }
}



export default connect(mapStateToProps)(MonthlyStatistics)