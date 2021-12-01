import React, { useState } from 'react';
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";

const LineChart = ({
    currentCountry,
    monthlyData,
    loadingMonthly
}) => {
    const [graphType, setGraphType] = useState("cases")

    const dataCases = {
        labels: [],
        datasets: [
            {
                label: "confirmed cases",
                lineTension: 0.1,
                data: [],
                fill: false,
                borderColor: "black"
            },
        ]
    }

    const dataDeaths = {
        labels: [],
        datasets: [
            {
                label: "deaths",
                lineTension: 0.1,
                data: [],
                fill: false,
                borderColor: "black"
            }
        ]
    }

    if (monthlyData[currentCountry]) {
        Object.entries(monthlyData[currentCountry]).forEach(entry => {
            dataCases.labels.unshift(entry[0].slice(4, 15));
            dataCases.datasets[0].data.unshift(entry[1].confirmed)
            dataDeaths.labels.unshift(entry[0].slice(4, 15));
            dataDeaths.datasets[0].data.unshift(entry[1].deaths)
        })
    }
    return (
        <div>
            <h1>{currentCountry}</h1>
            <div className="lineChart">
                <button onClick={() => graphType === "cases" ? setGraphType("deaths") : setGraphType("cases")}>{graphType === "cases" ? "Deaths" : "Cases"}</button>
                {loadingMonthly ? <div>loading...</div>
                    : monthlyData[currentCountry] ?
                        <Line data={graphType === "cases" ? dataCases : dataDeaths} />
                        : <div></div>}
            </div>
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


export default connect(mapStateToProps)(LineChart)
