import React, { useEffect } from "react";
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
} from "@mui/material";

const TableContent = (props) => {
  return (
    <TableRow>
      <TableCell>{props.listOfCountries}</TableCell>
      <TableCell>{props.currentData.confirmed}</TableCell>
      <TableCell>{props.currentData.confirmed_diff}</TableCell>
      <TableCell>{props.currentData.vaccinated}</TableCell>
      <TableCell>{props.currentData.vaccinated_per_hundred}</TableCell>
      <TableCell>{props.currentData.deaths}</TableCell>
      <TableCell>{props.currentData.deaths_diff}</TableCell>
    </TableRow>
  )
}

const CountryComparisonTable = ({
  selectedCountries,
  listOfCountries,
  loadingCurrent,
  currentData,
  getCurrentData,
}) => {
  useEffect(() => {
    selectedCountries.forEach(country => {
      if (!currentData[country])
        getCurrentData(country)
    })
  }, [selectedCountries])
  return (
    <TableContainer component={Paper}>
      <Table size="medium" aria-label="simple table" sx={{ maxWidth: 600 }}>
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>Confirmed</TableCell>
            <TableCell>Confirmed/Capita</TableCell>
            <TableCell>Vaccinated</TableCell>
            <TableCell>Vaccinated/Capita</TableCell>
            <TableCell>Deaths</TableCell>
            <TableCell>Deaths/Capita</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedCountries.map((scKey) => {
            if (currentData[scKey]) {
              return (
                <TableContent listOfCountries={listOfCountries[scKey]} currentData={currentData[scKey]} />
              )
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>)

};

const mapStateToProps = (state) => {
  return {
    selectedCountries: state.country.selectedCountries,
    listOfCountries: state.country.listOfCountries,
    currentData: state.country.currentData,
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
