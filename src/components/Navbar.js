import React from "react";
import { Link } from "react-router-dom";
import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Divider, ListItemIcon, Typography, Button,} from "@mui/material";
import { PersonAdd, Settings, Logout } from '@mui/icons-material';
import { connect } from "react-redux";
import { signOut } from '../redux/actions/authenticationActions';
import { margin } from "@mui/system";


const Navbar = ({
  uid,
  signedInEmail,
  signOut,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {setAnchorEl(event.currentTarget);};
  const handleClose = () => {setAnchorEl(null);};
  
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>
          <Button variant="text" component={Link} to="/">Home</Button>
        </Typography>
        <Typography sx={{ minWidth: 100 }}>
          <Button variant="text" component={Link} to="/details">Details</Button>
        </Typography>
        <Typography sx={{ minWidth: 100 }}>
          <Button variant="text" component={Link} to="/compare">Comparison</Button>
        </Typography>
        <Typography sx={{ minWidth: 100 }}>
          <Button variant="text" component={Link} to="/map">Map</Button>
        </Typography>
        <Typography sx={{ minWidth: 100, position: "absolute", right: "10%"}}>
          {uid ?
            <span>
              <Tooltip title="Account settings">
              <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                <Avatar sx={{ width: 32, height: 32, margin: "0 10px 0 0"}}>{signedInEmail.substring(0, 1)}</Avatar>
                {signedInEmail.substring(0, signedInEmail.lastIndexOf('@'))}
              </IconButton>
            </Tooltip>
            </span>:
            <span className="loginNavBar">
              <Button variant="text" component={Link} to="/account">Sign in</Button>
            </span>
          }
        </Typography>
        <Menu anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{elevation: 0, sx: {overflow: 'visible', filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))', mt: 1.5,
                                              '& .MuiAvatar-root': { width: 32, height: 32, ml: -0.5, mr: 1,},
                                              '&:before': { content: '""', display: 'block', position: 'absolute', top: 0, right: 14, width: 10, height: 10, bgcolor: 'background.paper', transform: 'translateY(-50%) rotate(45deg)', zIndex: 0,},
                                            },
                          }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={() => signOut()} variant="text">
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </React.Fragment>
    // <AppBar position="relative" color="transparent" elevation={0}>
    //   <CssBaseline />
    //   <Toolbar
    //     style={{
    //       float: "none",
    //       width: "auto",
    //       marginLeft: "auto",
    //       marginRight: "auto",
    //     }}
    //   >
    //     <Typography variant="h6">
    //       <Button variant="text" component={Link} to="/">
    //         Home
    //       </Button>
    //       <Button variant="text" component={Link} to="/details">
    //         Details
    //       </Button>
    //       <Button variant="text" component={Link} to="/compare">
    //         Comparison
    //       </Button>
    //       <Button variant="text" component={Link} to="/map">
    //         Map
    //       </Button>
    //       {uid ?
    //         <span>
    //           <Button variant="text" >Hello {signedInEmail.substring(0, signedInEmail.lastIndexOf('@'))}!</Button>
    //           <Button onClick={() => signOut()} variant="text">Sign out</Button>
    //         </span>:
    //         <span>
    //           <Button variant="text" component={Link} to="/account">Sign in</Button>
    //         </span>
    //       }
    //     </Typography>
    //   </Toolbar>
    // </AppBar>
  );
};


const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid,
    signedInEmail: state.firebase.auth.email,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);