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
  CircularProgress
} from "@mui/material";
const GlobalStatistics = ({ data, loading, getGlobalData }) => {
  useEffect(() => {
    getGlobalData();
  }, []);

  return (
    <Container maxWidth="lg" align="center">
      <Typography variant="h3">Global Covid-19 stats</Typography>
      {loading ? (
        <CircularProgress />
      ) : data ? (
        <Container>
          <div>
            Total confirmed cases: {data.confirmed}<br />
            Increase in cases since yesterday: {data.confirmed_diff}<br />
            Total confirmed deaths: {data.deaths}<br />
            Increase in deaths since yesterday: {data.deaths_diff}<br />
            <br />Last updated: {data.last_update}<br />
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
