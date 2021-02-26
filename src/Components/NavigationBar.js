import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import logo from '../images/devchallenges.svg'

const NavigationBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar 
        position="static" 
        color="transparent"
        style={{boxShadow: 'none'}}  
      >
        <Toolbar className={classes.toolbar}>
          <Link to="/user">
            <IconButton edge="start" className={classes.menuButton} aria-label="menu">
              <img src={logo} alt="logo"/>
            </IconButton>
          </Link>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem>
                  <Link to="/login" className={classes.logout} >
                    Logout
                  </Link>
                </MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    shadows: ["none"]
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logout: {
    color: 'red',
    textDecoration: 'none'
  }
}));

export default NavigationBar