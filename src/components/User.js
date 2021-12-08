import React, { useState } from "react";
import { connect } from "react-redux";
import { signUp } from "../redux/actions/authenticationActions";
import { Avatar, FormControlLabel, Grid, TextField, Typography, Button, Link, Paper, Checkbox } from '@mui/material';

const User = ({ signUp, signupError }) => {

  return (
      <div>
          Display User info or remove!
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);