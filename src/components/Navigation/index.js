import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  btn: {
    margin: theme.spacing(1, 1.5),
  },
  linkBtn: {
    margin: '0',
    padding: '0',
    textDecoration: 'none',
    color: 'white'
  }
}));

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          NoteTaker
        </Typography>
        <nav>
          <Link className={classes.btn} to={ROUTES.LANDING}>Landing</Link>
          <Link className={classes.btn} to={ROUTES.HOME}>Home</Link>
          <Link className={classes.btn} to={ROUTES.ACCOUNT}>Account</Link>
          {/* <Link className={classes.btn} to={ROUTES.ADMIN}>Admin</Link> */}
        </nav>
        <SignOutButton />
      </Toolbar>
    </AppBar>
  );
};

const NavigationNonAuth = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          NoteTaker
        </Typography>
        <nav>
          <Link className={classes.btn} to={ROUTES.LANDING}>Landing</Link>
        </nav>
        <Link to={ROUTES.SIGN_UP} className={classes.linkBtn}>
          <Button color="primary" variant="contained" className={classes.btn}>Sign Up</Button>
        </Link>
        <Link to={ROUTES.SIGN_IN} className={classes.linkBtn}>
          <Button color="primary" variant="contained" className={classes.btn}>Sign In</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;