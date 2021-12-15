import React from "react";
import { connect } from "react-redux";
import { Container } from "@mui/material";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import User from "../components/User";
import WatchlistSelection from "../components/WatchlistSelection";

const AccountPage = ({ uid }) => {
  return (
    <Container>
      {uid ? (
        <Container>
          <User />
          <WatchlistSelection />
        </Container>
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

export default connect(mapStateToProps)(AccountPage);
