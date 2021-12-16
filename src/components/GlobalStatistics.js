/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import millify from "millify";
import { getGlobalData } from "../redux/actions/globalDataActions";
import {
  Typography,
  Container,
  CircularProgress,
  CardContent,
  Card,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { grey } from "@mui/material/colors";
const GlobalStatistics = ({ data, loading, error, getGlobalData }) => {
  useEffect(() => {
    getGlobalData();
  }, []);

  return (
    <Container>
      <Card
        sx={{ minHeight: 275, maxHeight: 800, minWidth: 400, maxWidth: 400 }}
      >
        <CardContent>
          {loading ? (
            <CircularProgress />
          ) : data ? (
            <Container align="left">
              <Typography variant="h5" align="center" gutterBottom>
                Global Covid-19 stats
              </Typography>
              <TableContainer>
                <Table size="small" sx={{ borderBottom: "none" }}>
                  <TableRow>
                    <TableCell
                      sx={{ borderBottom: "none" }}
                      color="text.secondary"
                    >
                      Confirmed cases:
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }}>
                      {millify(data.confirmed)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderBottom: "none" }}>
                      Increase in cases since yesterday:
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }}>
                      {millify(data.confirmed_diff)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderBottom: "none" }}>
                      Confirmed deaths:
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }}>
                      {millify(data.deaths)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderBottom: "none" }}>
                      Increase in deaths since yesterday:
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }}>
                      {millify(data.deaths_diff)}
                    </TableCell>
                  </TableRow>
                </Table>
              </TableContainer>

              <Typography component="p" variant="body5" align="center">
                Last updated: {data.last_update}
              </Typography>
            </Container>
          ) : error ? (
            <div>Could not fetch global data</div>
          ) : (
            <div></div>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.globalData.globalData,
    loading: state.globalData.loading,
    error: state.globalData.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGlobalData: () => dispatch(getGlobalData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalStatistics);
