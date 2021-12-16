/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import {
  getCurrentData,
  getListOfCountries,
} from "../redux/actions/countryActions";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  CircularProgress,
  Button,
} from "@mui/material";

const CountryComparisonTable = ({
  selectedCountries,
  loadingCurrent,
  currentData,
  getCurrentData,
  getListOfCountries,
  listOfCountries,
}) => {
  const [sortConfig, setSortConfig] = useState({
    key: "countryName",
    direction: "ascending",
  });
  let sortedProducts = [...Object.keys(currentData)].filter((country) =>
    selectedCountries.includes(country)
  );
  useMemo(() => {
    sortedProducts = [...Object.keys(currentData)].filter((country) =>
      selectedCountries.includes(country)
    );
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

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    getListOfCountries();
    selectedCountries.forEach((country) => {
      if (!currentData[country]) getCurrentData(country);
    });
  }, [selectedCountries, currentData]);

  return !Object.values(loadingCurrent).every((item) => item === false) ? (
    <div className="loadingPage">
      {" "}
      <CircularProgress />
    </div>
  ) : (
    <TableContainer component={Paper}>
      <Table size="medium" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Button onClick={() => requestSort("countryName")}>
                Country
              </Button>
            </TableCell>
            <TableCell>
              <Button onClick={() => requestSort("confirmed")}>
                Confirmed
              </Button>
            </TableCell>
            <TableCell>
              <Button onClick={() => requestSort("confirmed_diff")}>
                Confirmed (Today)
              </Button>
            </TableCell>
            <TableCell>
              <Button onClick={() => requestSort("vaccinated")}>
                Vaccinated
              </Button>
            </TableCell>
            <TableCell>
              <Button onClick={() => requestSort("vaccinated_per_hundred")}>
                %Vaccinated
              </Button>
            </TableCell>
            <TableCell>
              <Button onClick={() => requestSort("deaths")}>Deaths</Button>
            </TableCell>
            <TableCell>
              <Button onClick={() => requestSort("deaths_diff")}>
                Deaths (Today)
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedProducts.map((country) => {
            return (
              <TableRow key={country}>
                <TableCell>{listOfCountries[country]}</TableCell>
                <TableCell>{currentData[country].confirmed}</TableCell>
                <TableCell>{currentData[country].confirmed_diff}</TableCell>
                <TableCell>{currentData[country].vaccinated}</TableCell>
                <TableCell>
                  {currentData[country].vaccinated_per_hundred}
                </TableCell>
                <TableCell>{currentData[country].deaths}</TableCell>
                <TableCell>{currentData[country].deaths_diff}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCountries: state.country.selectedCountries,
    currentData: state.country.currentData,
    loadingCurrent: state.country.loadingCurrent,
    error: state.country.error,
    listOfCountries: state.country.listOfCountries
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentData: (country) => dispatch(getCurrentData(country)),
    getListOfCountries: () => dispatch(getListOfCountries()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryComparisonTable);