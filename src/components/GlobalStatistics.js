import React, { useEffect } from "react";
import { connect } from "react-redux";
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
} from "@mui/material";
const GlobalStatistics = ({ data, loading, getGlobalData }) => {
  useEffect(() => {
    getGlobalData();
  }, []);

  return (
    <Container maxWidth="lg" align="center">
      <Typography variant="h3">Global Covid-19 stats</Typography>
      {loading ? (
        <div>loading...</div>
      ) : data ? (
        <Container>
          <li>Total confirmed cases: {data.confirmed}</li>
          <li>Increase in cases since yesterday: {data.confirmed_diff}</li>
          <li>Total confirmed deaths: {data.deaths}</li>
          <li>Increase in deaths since yesterday: {data.deaths_diff}</li>
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
