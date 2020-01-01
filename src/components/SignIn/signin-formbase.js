import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/styles';

import ForgotPassword from '../PasswordForget';

const styles = theme => {

  // console.log(theme);
  
  return ({
  root: {
    height: '100vh',
    marginTop: '50px',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/collection/8469893)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorMsg: {
      color: 'red'
  },
  link: {
    textDecoration: 'none', 
    color: theme.palette.primary.main,
    cursor: 'pointer'
  }
})
};

const INITIAL_STATE = {
  email: '',
  password: '',
  setOpen: false,
  error: null,
};

class SignInFormBase extends Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ setOpen: true })
  };

  handleClose = value => {
    this.setState({ setOpen: false })
  };

  isInvalidEmail = () => {
    if (this.state.email === '') return true;
  };

  onPassReset = event => {
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;

    const {
      email,
      password,
      setOpen,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <form className={classes.form} noValidate onSubmit={this.onSubmit} >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={this.onChange}
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              disabled={isInvalid}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            {error && <p className={classes.errorMsg}>{error.message}</p>}
          </form>
          <Grid container>
          <Grid item xs>
              <div onClick={this.handleClickOpen} className={classes.link}>Forgot password?</div>
              <ForgotPassword 
                open={this.state.setOpen} 
                handleClose={this.handleClose} 
                email={this.state.email}
                onChange={this.onChange}
                onPassReset={this.onPassReset}
                isInvalidEmail={this.isInvalidEmail()}
                error={this.state.error}
              />
            </Grid>
            <Grid item>
              <Link className={classes.link} to={ROUTES.SIGN_UP}>Don't have an account? Sign up</Link>
            </Grid>
          </Grid>
          </div>
        </Grid>
      </Grid>
    );
  }
};

SignInFormBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignInFormBase);