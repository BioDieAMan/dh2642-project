import React from "react";
import { connect } from "react-redux";
import { Container, Avatar, Typography } from '@mui/material';

const User = ({
  signedInEmail,
}) => {
  return (
    <Container sx={{ mt: "20px" }}>
      <Typography sx={{ minWidth: 100 }} variant="h4">
        <Avatar sx={{ width: 40, height: 40, float: "left", mr: "10px" }}>{signedInEmail.substring(0, 1).toUpperCase()}</Avatar>
        {signedInEmail.charAt(0).toUpperCase() + signedInEmail.substring(1, signedInEmail.lastIndexOf('@'))}
      </Typography>
      <Typography sx={{ minWidth: 100, mt: "10px" }}>
        Email: {signedInEmail}
      </Typography>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    signedInEmail: state.firebase.auth.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);