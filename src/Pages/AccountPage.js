import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const AccountPage = () => {
    return (
        <Container>
            <Navbar />
            <SignIn />
            <SignUp />
        </Container>
    );
};

export default AccountPage;