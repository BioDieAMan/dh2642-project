/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { Container, Button, CircularProgress } from "@mui/material";
import { getMonthlyData, getSixMonthData } from "../redux/actions/countryActions";
const LineChart = ({
  currentCountry,
  monthlyData,
  sixMonthData,
  loadingMonthly,
  currentData,
  listOfCountries,
  getMonthlyData,
  getSixMonthData
}) => {
  useEffect(() => {
    if (!monthlyData[currentCountry]) {
      getMonthlyData(currentCountry);
      getSixMonthData(currentCountry)
    }
  }, [])
  const [graphType, setGraphType] = useState("cases");
  const [timePeriod, setTimePeriod] = useState("monthly");

  const monthlyDataCases = {
    labels: [],
    datasets: [
      {
        label: "",
        lineTension: 0.1,
        data: [],
        fill: false,
        borderColor: "black",
      },
    ],
  };

  const monthlyDataDeaths = {
    labels: [],
    datasets: [
      {
        label: "",
        lineTension: 0.1,
        data: [],
        fill: false,
        borderColor: "black",
      },
    ],
  };
  const sixMonthDataCases = {
    labels: [],
    datasets: [
      {
        label: "",
        lineTension: 0.1,
        data: [],
        fill: false,
        borderColor: "black",
      },
    ],
  };

  const sixMonthDataDeaths = {
    labels: [],
    datasets: [
      {
        label: "",
        lineTension: 0.1,
        data: [],
        fill: false,
        borderColor: "black",
      },
    ],
  };

  if (monthlyData[currentCountry]) {
    Object.entries(monthlyData[currentCountry]).forEach((entry) => {
      monthlyDataCases.labels.unshift(entry[0].slice(4, 15));
      monthlyDataCases.datasets[0].data.unshift(entry[1].confirmed);
      monthlyDataCases.datasets[0].label = `confirmed cases in ${listOfCountries[currentCountry]}`
      monthlyDataDeaths.labels.unshift(entry[0].slice(4, 15));
      monthlyDataDeaths.datasets[0].data.unshift(entry[1].deaths);
      monthlyDataDeaths.datasets[0].label = `confirmed deaths in ${listOfCountries[currentCountry]}`
    });
  }
  if (sixMonthData[currentCountry]) {
    Object.entries(sixMonthData[currentCountry]).forEach((entry) => {
      sixMonthDataCases.labels.unshift(entry[0].slice(4, 15));
      sixMonthDataCases.datasets[0].data.unshift(entry[1].confirmed);
      sixMonthDataCases.datasets[0].label = `confirmed cases in ${listOfCountries[currentCountry]}`
      sixMonthDataDeaths.labels.unshift(entry[0].slice(4, 15));
      sixMonthDataDeaths.datasets[0].data.unshift(entry[1].deaths);
      sixMonthDataDeaths.datasets[0].label = `confirmed deaths in ${listOfCountries[currentCountry]}`
    });
  }

  if (loadingMonthly[currentCountry]) {
    return (
      <CircularProgress />
    )
  }

  if (!currentCountry) {
    return (
      <div></div>
    )
  }

  if (!currentData[currentCountry] && currentCountry) {
    const noData = {
      label: `No data for ${listOfCountries?.[currentCountry]}`,
      data: []
    }
    monthlyDataCases.datasets[0] = noData
    monthlyDataDeaths.datasets[0] = noData
    sixMonthDataDeaths.datasets[0] = noData
    sixMonthDataCases.datasets[0] = noData
  }

  return (
    <Container>
      <Container>
        <Line
          data={
            graphType === "cases"
              ? timePeriod === "monthly"
                ? monthlyDataCases
                : sixMonthDataCases
              : timePeriod === "monthly"
                ? monthlyDataDeaths
                : sixMonthDataDeaths
          }
        />
      </Container>
      <Container>
        <Button
          variant="contained"
          onClick={() =>
            graphType === "cases"
              ? setGraphType("deaths")
              : setGraphType("cases")
          }
        >
          {graphType === "cases" ? "See deaths" : "See cases"}
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            timePeriod === "monthly"
              ? setTimePeriod("sixMonth")
              : setTimePeriod("monthly")
          }
        >
          {timePeriod === "monthly" ? "See last six months" : "See last month"}
        </Button>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    loadingMonthly: state.country.loadingMonthly,
    currentCountry: state.country.currentCountry,
    monthlyData: state.country.monthlyData,
    sixMonthData: state.country.sixMonthData,
    currentData: state.country.currentData,
    listOfCountries: state.country.listOfCountries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMonthlyData: country => dispatch(getMonthlyData(country)),
    getSixMonthData: country => dispatch(getSixMonthData(country))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineChart);
