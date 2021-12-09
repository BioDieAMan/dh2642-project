import React, { useEffect } from "react";
import { connect } from "react-redux";
import millify from "millify";
import { getGlobalData } from "../redux/actions/globalDataActions";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
  CircularProgress,
} from "@mui/material";
const GlobalStatistics = ({ data, loading, getGlobalData }) => {
  useEffect(() => {
    getGlobalData();
  }, []);

  return (
    <Container>
      <Typography variant="h4">Global Covid-19 stats</Typography>
      {loading ? (
        <CircularProgress />
      ) : data ? (
        <Container>
          <div>
            Total confirmed cases: {millify(data.confirmed)}
            <br />
            Increase in cases since yesterday: {millify(data.confirmed_diff)}
            <br />
            Total confirmed deaths: {millify(data.deaths)}
            <br />
            Increase in deaths since yesterday: {millify(data.deaths_diff)}
            <br />
            <br />
            Last updated: {data.last_update}
            <br />
          </div>
        </Container>
      ) : (
        <div></div>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.globalData.globalData,
    loading: state.globalData.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGlobalData: () => dispatch(getGlobalData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalStatistics);
