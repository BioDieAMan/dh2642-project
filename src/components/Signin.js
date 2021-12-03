import React, { useState } from 'react';
import { connect } from "react-redux";
import { signIn, signOut } from '../redux/actions/authenticationActions';

const Signin = ({
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
        <>
            {uid ? <div>Signed in as {signedInEmail} <button onClick={() => signOut()}>Sign out</button></div>
                :
                <div>
                    <h2>Sign in</h2>
                    {signinError ? <p>{signinError}</p> : <div></div>}
                    {signoutError ? <p>{signoutError}</p> : <div></div>}
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="text" />
                    <button onClick={() => signIn(email, password)}>Sign in</button>
                </div>}
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
