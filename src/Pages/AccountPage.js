import React from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";


const AccountPage = ({
    uid,
}) => {
    return (
        <Container>
            <Navbar />
            {uid ?
                <span>
                    You are signed in!
                </span>:
                <span>
                    {window.location.hash === '#SignUp'?
                        <SignUp />:
                        <SignIn />
                    }
                </span>
            }
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        uid: state.firebase.auth.uid,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);