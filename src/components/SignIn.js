// import LockOutlinedIcon from '@mui/icons/LockOutlined';
import { Avatar, FormControlLabel, Grid, TextField, Typography, Button, Link, Paper, Checkbox } from '@mui/material';
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
                    <Avatar className="logInAvatar">
                        {/* <LockOutlinedIcon /> */}
                    </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                {signinError ? {signinError}: <span></span>}
                <TextField onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Username" label="Username" fullWidth required />
                <TextField onChange={(e) => setPassword(e.target.value)} placeholder="Password" label="Password" type="password" fullWidth required />
                <FormControlLabel control={
                    <Checkbox name="checkedB" color="primary" />
                }
                    label="Remember me"
                />
                <Button className="logInButton" onClick={() => signIn(email, password)} type="submit" color="primary" variant="contained" fullWidth>Sign in</Button>
                <Typography>
                    <Link href="#">Forgot password?</Link>
                </Typography>
                <Typography>
                    <Link href="#">Register an account</Link>
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
