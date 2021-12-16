import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { connect } from "react-redux";
import { signOut } from "../redux/actions/authenticationActions";

const Navbar = ({ loggedIn, signedInEmail, signOut, signoutError }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [path, setPath] = useState(window.location.pathname);

  return (
    <Container sx={{ pb: 8 }}>
      <Box sx={{ display: "flex", alignitems: "center", textAlign: "center" }}>
        <Typography sx={{ minWidth: 100 }}>
          <Button
            variant="text"
            component={Link}
            to="/"
            sx={{ bgcolor: path === "/" ? "lightblue" : undefined }}
            onClick={() => setPath("/")}
          >
            Home
          </Button>
        </Typography>

        <Typography sx={{ minWidth: 100 }}>
          <Button
            variant="text"
            component={Link}
            to="/details"
            sx={{ bgcolor: path === "/details" ? "lightblue" : undefined }}
            onClick={() => setPath("/details")}
          >
            Details
          </Button>
        </Typography>

        <Typography sx={{ minWidth: 100 }}>
          <Button
            variant="text"
            component={Link}
            to="/compare"
            sx={{ bgcolor: path === "/compare" ? "lightblue" : undefined }}
            onClick={() => setPath("/compare")}
          >
            Comparison
          </Button>
        </Typography>
        <Typography sx={{ minWidth: 100, position: "absolute", right: "10%" }}>
          {loggedIn ?
            <span>
              <Tooltip title="Account settings">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                  <Avatar sx={{ width: 32, height: 32, margin: "0 10px 0 0" }}>
                    {signedInEmail.substring(0, 1)}
                  </Avatar>
                  {signedInEmail.substring(0, signedInEmail.lastIndexOf("@"))}
                </IconButton>
              </Tooltip>
            </span>
            : (
              <span className="loginNavBar">
                {signoutError ? { signoutError } : <span></span>}
                <Button variant="text" component={Link} to="/account" sx={{ bgcolor: path === "/account" ? "lightblue" : undefined }} onClick={() => setPath("/account")}>Sign in</Button>
              </span >
            )}
        </Typography >

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": { width: 32, height: 32, ml: -0.5, mr: 1 },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem component={Link} to="/account">
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => signOut()} variant="text">
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box >
    </Container >
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: !state.firebase.auth.isEmpty,
    signedInEmail: state.firebase.auth.email,
    signoutError: state.authentication.signoutError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
