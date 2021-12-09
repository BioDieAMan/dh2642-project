import React from "react";
import { connect } from "react-redux";
import { Container } from "@mui/material";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import User from "../components/User";

const AccountPage = ({ uid }) => {
  return (
    <Container>
      {uid ? (
        <User />
      ) : window.location.hash === "#SignUp" ? (
        <SignUp />
      ) : (
        <SignIn />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
