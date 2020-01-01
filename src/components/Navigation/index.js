import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          NoteTaker
        </Typography>
        <nav>
          <Link className={classes.link} to={ROUTES.SIGN_IN}>Sign In</Link>
          <Link className={classes.link} to={ROUTES.LANDING}>Landing</Link>
          <Link className={classes.link} to={ROUTES.HOME}>Home</Link>
          <Link className={classes.link} to={ROUTES.ACCOUNT}>Account</Link>
          <Link className={classes.link} to={ROUTES.ADMIN}>Admin</Link>
        </nav>
        <Button href="#" color="primary" variant="contained" className={classes.link}>
          SIGN UP
        </Button>
        <Button href="#" color="primary" variant="contained" className={classes.link}>
          SIGN IN
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;