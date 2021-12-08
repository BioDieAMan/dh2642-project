// import LockOutlinedIcon from '@mui/icons/LockOutlined';
import { Box, Avatar, FormControlLabel, Grid, TextField, Typography, Button, Link, Paper, Checkbox } from '@mui/material';
import React, { useState } from 'react';
import { connect } from "react-redux";
import { signIn, signOut } from '../redux/actions/authenticationActions';


const SignIn = ({
    uid,
    signedInEmail,
    signIn,
    signOut,
    signinError,
    signoutError
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

                <Box    component="form"
                        sx={{'& .MuiTextField-root': { mb: "10px", mt: "10px"},}}
                        noValidate
                        autoComplete="off"
                >
                    {signinError?
                        <div>
                            <TextField  onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        placeholder="Email"
                                        label="Email"
                                        fullWidth required
                                        error
                                        id="outlined-error"
                            />
                            <TextField  onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeholder="Password"
                                        label="Password"
                                        fullWidth required
                                        error
                                        id="outlined-error-helper-text"
                                        helperText={signinError}
                            />
                        </div>:
                        <div>
                            <TextField  onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        placeholder="Email"
                                        label="Email"
                                        fullWidth required
                            />
                            <TextField  onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeholder="Password"
                                        label="Password"
                                        fullWidth required
                            />
                        </div>
                    }
                </Box>

                {/* <TextField sx={{mb: '10px'}} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" label="Email" fullWidth required />
                <TextField sx={{mb: '10px'}} onChange={(e) => setPassword(e.target.value)} placeholder="Password" label="Password" type="password" fullWidth required /> */}
                {/* <FormControlLabel control={
                    <Checkbox name="checkedB" color="primary" />
                }
                    label="Remember me"
                /> */}
                <Button sx={{mb: '10px'}} onClick={() => signIn(email, password)} type="submit" color="primary" variant="contained" fullWidth>Sign in</Button>
                {/* <Typography>
                    <Link href="#">Forgot password?</Link>
                </Typography> */}
                <Typography>
                    <Link sx={{mb: '10px'}} onClick={() => (window.location.hash="SignUp", window.location.reload())}>Register an account</Link>
                </Typography>
            </Paper>
        </Grid>

        // <>
        //     {uid ? <div>Signed in as {signedInEmail} <button onClick={() => signOut()}>Sign out</button></div>
        //         :
        //         <div>
        //             <h2>Sign in</h2>
        //             {signinError ? <p>{signinError}</p> : <div></div>}
        //             {signoutError ? <p>{signoutError}</p> : <div></div>}
        //             <input
        //                 onChange={(e) => setEmail(e.target.value)}
        //                 type="email" />
        //             <input
        //                 onChange={(e) => setPassword(e.target.value)}
        //                 type="text" />
        //             <button onClick={() => signIn(email, password)}>Sign in</button>
        //         </div>}
        // </>
    )
}

const mapStateToProps = state => {
    return {
        uid: state.firebase.auth.uid,
        signedInEmail: state.firebase.auth.email,
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
