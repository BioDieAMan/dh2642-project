import React, { useState } from "react";
import { connect } from "react-redux";
import { signUp } from "../redux/actions/authenticationActions";
import { Box, Grid, TextField, Typography, Button, Link, Paper } from '@mui/material';

const SignUp = ({ signUp, signupError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Grid>
      <Paper className="logInPaper" elevation={10}>
        <Grid align="center">
          <h2>Sign up</h2>
        </Grid>

        <Typography>
          <Link sx={{ mb: '10px' }} onClick={() => (window.location.hash = "SignIn", window.location.reload())}>Already have an account?</Link>
        </Typography>

        <Box
          component="form"
          sx={{ '& .MuiTextField-root': { mb: "10px", mt: "10px" }, }}
          noValidate
          autoComplete="off"
        >
          {signupError ?
            <div>
              <TextField onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                label="Email"
                fullWidth required
                error
                id="outlined-error"
              />
              <TextField onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                label="Password"
                fullWidth required
                error
                id="outlined-error-helper-text"
                helperText={signupError}
              />
            </div> :
            <div>
              <TextField onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                label="Email"
                fullWidth required
              />
              <TextField onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                label="Password"
                fullWidth required
              />
            </div>
          }
        </Box>

        <Button sx={{ mb: '10px' }} onClick={() => signUp(email, password)} disabled={(email.length <= 0) || (password.length <= 0)} type="submit" color="primary" variant="contained" fullWidth>Create Account</Button>
      </Paper>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    signupError: state.authentication.signupError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (email, password) => dispatch(signUp(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
