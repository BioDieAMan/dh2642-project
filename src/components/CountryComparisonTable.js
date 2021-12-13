/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import { getCurrentData, setCountry } from "../redux/actions/countryActions";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  CircularProgress,
  Button
} from "@mui/material";

const TableContent = (props) => {
  return (
    <TableRow>
      <TableCell>{props.currentData.countryName}<Button></Button></TableCell>
      <TableCell>{props.currentData.confirmed}</TableCell>
      <TableCell>{props.currentData.confirmed_diff}</TableCell>
      <TableCell>{props.currentData.vaccinated}</TableCell>
      <TableCell>{props.currentData.vaccinated_per_hundred}</TableCell>
      <TableCell>{props.currentData.deaths}</TableCell>
      <TableCell>{props.currentData.deaths_diff}</TableCell>
    </TableRow>
  );
};

const CountryComparisonTable = ({
  selectedCountries,
  listOfCountries,
  loadingCurrent,
  currentData,
  getCurrentData
}) => {
  const [sortConfig, setSortConfig] = useState({ key: 'countryName', direction: 'ascending' });
  let sortedProducts = [...Object.keys(currentData)]
  useMemo(() => {
    sortedProducts = [...Object.keys(currentData)];
    if (sortConfig !== null) {
      sortedProducts.sort((a, b) => {
        if (currentData[a][sortConfig.key] < currentData[b][sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (currentData[a][sortConfig.key] > currentData[b][sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedProducts;
  }, [currentData, sortConfig]);


  const requestSort = key => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };


  useEffect(() => {
    selectedCountries.forEach((country) => {
      if (!currentData[country]) getCurrentData(country);
    });
  }, [selectedCountries, currentData]);


  return (
    loadingCurrent ? (<div className='loadingPage' > <CircularProgress /></div >) : (
      <TableContainer component={Paper}>
        <Table size="medium" aria-label="simple table" sx={{ maxWidth: 600 }}>
          <TableHead>
            <TableRow>
              <TableCell>Country<Button onClick={() => requestSort('countryName')}>^</Button></TableCell>
              <TableCell>Confirmed<Button onClick={() => requestSort('confirmed')}>^</Button></TableCell>
              <TableCell>Cases since yesterday<Button onClick={() => requestSort('confirmed_diff')}>^</Button></TableCell>
              <TableCell>Vaccinated<Button onClick={() => requestSort('vaccinated')}>^</Button></TableCell>
              <TableCell>% Vaccinated<Button onClick={() => requestSort('vaccinated_per_hundred')}>^</Button></TableCell>
              <TableCell>Deaths<Button onClick={() => requestSort('deaths')}>^</Button></TableCell>
              <TableCell>Deaths since yesterday<Button onClick={() => requestSort('deaths_diff')}>^</Button></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              sortedProducts.map((country) => {
                return (
                  <TableRow>
                    <TableCell>{currentData[country].countryName}</TableCell>
                    <TableCell>{currentData[country].confirmed}</TableCell>
                    <TableCell>{currentData[country].confirmed_diff}</TableCell>
                    <TableCell>{currentData[country].vaccinated}</TableCell>
                    <TableCell>{currentData[country].vaccinated_per_hundred}</TableCell>
                    <TableCell>{currentData[country].deaths}</TableCell>
                    <TableCell>{currentData[country].deaths_diff}</TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    ));
};

const mapStateToProps = (state) => {
  return {
    selectedCountries: state.country.selectedCountries,
    listOfCountries: state.country.listOfCountries,
    currentData: state.country.currentData,
    loadingCurrent: state.country.loadingCurrent
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCountry: (country) => dispatch(setCountry(country)),
    getCurrentData: (country) => dispatch(getCurrentData(country)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryComparisonTable);
