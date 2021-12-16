// import LockOutlinedIcon from '@mui/icons/LockOutlined';
import { Box, Avatar, Grid, TextField, Typography, Button, Link, Paper } from '@mui/material';
import React, { useState } from 'react';
import { connect } from "react-redux";
import { signIn, signOut } from '../redux/actions/authenticationActions';


const SignIn = ({
    signIn,
    signinError,
}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Grid>
            <Paper className="logInPaper" elevation={10}>
                <Grid align="center">
                    <Avatar />
                    <h2>Sign In</h2>
                </Grid>

                <Box component="form"
                    sx={{ '& .MuiTextField-root': { mb: "10px", mt: "10px" }, }}
                    noValidate
                    autoComplete="off"
                >
                    {signinError ?
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
                                helperText={signinError}
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

                <Button sx={{ mb: '10px' }} onClick={() => signIn(email, password)} disabled={(email.length <= 0) || (password.length <= 0)} type="submit" color="primary" variant="contained" fullWidth>Sign in</Button>

                <Typography>
                    <Link sx={{ mb: '10px' }} onClick={() => (window.location.hash = "SignUp", window.location.reload())}>Register an account</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        signinError: state.authentication.signinError,
        signoutError: state.authentication.signoutError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut()),
        signIn: (email, password) => dispatch(signIn(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
