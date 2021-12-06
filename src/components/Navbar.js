import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  Button,
} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="relative" color="transparent" elevation={0}>
      <CssBaseline />
      <Toolbar
        style={{
          float: "none",
          width: "auto",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography variant="h6">
          <Button variant="text" component={Link} to="/">
            Home
          </Button>
          <Button variant="text" component={Link} to="/details">
            Details
          </Button>
          <Button variant="text" component={Link} to="/compare">
            Comparison
          </Button>
          <Button variant="text" component={Link} to="/map">
            Map
          </Button>
          <Button variant="text" component={Link} to="/account">
            Log in
          </Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
