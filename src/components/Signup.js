import React, { useState } from 'react';
import { connect } from "react-redux";
import { signUp } from '../redux/actions/authenticationActions';

const Signup = ({
    signUp,
    signupError
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <>
            <h2>Sign up</h2>
            {signupError ? <p>{signupError}</p> : <div></div>}
            <input
                onChange={(e) => setEmail(e.target.value)}
                type="email" />
            <input
                onChange={(e) => setPassword(e.target.value)}
                type="text" />
            <button onClick={() => signUp(email, password)}>Sign up</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        signupError: state.authentication.signupError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (email, password) => dispatch(signUp(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
