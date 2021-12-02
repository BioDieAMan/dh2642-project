import React, { useState } from 'react';
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";

const LineChart = ({
    currentCountry,
    monthlyData,
    sixMonthData,
    loadingMonthly,
    loadingSixMonth,
    listOfCountries
}) => {
    const [graphType, setGraphType] = useState("cases");
    const [interval, setInterval] = useState("monthly");

    const monthlyDataCases = {
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

    const monthlyDataDeaths = {
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
    const sixMonthDataCases = {
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

    const sixMonthDataDeaths = {
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
            monthlyDataCases.labels.unshift(entry[0].slice(4, 15));
            monthlyDataCases.datasets[0].data.unshift(entry[1].confirmed)
            monthlyDataDeaths.labels.unshift(entry[0].slice(4, 15));
            monthlyDataDeaths.datasets[0].data.unshift(entry[1].deaths)
        })
    }
    if (sixMonthData[currentCountry]) {
        Object.entries(sixMonthData[currentCountry]).forEach(entry => {
            sixMonthDataCases.labels.unshift(entry[0].slice(4, 15));
            sixMonthDataCases.datasets[0].data.unshift(entry[1].confirmed)
            sixMonthDataDeaths.labels.unshift(entry[0].slice(4, 15));
            sixMonthDataDeaths.datasets[0].data.unshift(entry[1].deaths)
        })
    }
    return (
        <div>
            <h1>{currentCountry}</h1>
            <div className="lineChart">
                {!monthlyData[currentCountry] && !loadingMonthly ? <h1>Choose a country</h1>
                    : loadingMonthly ? <h1>Loading...</h1>
                        : <div><Line data={graphType === "cases" ? interval === "monthly" ? monthlyDataCases : sixMonthDataCases : interval === "monthly" ? monthlyDataDeaths : sixMonthDataDeaths} />
                            <button onClick={() => graphType === "cases" ? setGraphType("deaths") : setGraphType("cases")}>{graphType === "cases" ? "Deaths" : "Cases"}</button>
                            <button onClick={() => interval === "monthly" ? setInterval("sixMonth") : setInterval("monthly")}>{interval === "monthly" ? "Six Months" : "Last Month"}</button></div>}
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        loadingMonthly: state.country.loadingMonthly,
        currentCountry: state.country.currentCountry,
        monthlyData: state.country.monthlyData,
        sixMonthData: state.country.sixMonthData,
        loadingSixMonth: state.country.loadingSixMonth,
        listOfCountries: state.country.listOfCountries
    }
}


export default connect(mapStateToProps)(LineChart)
