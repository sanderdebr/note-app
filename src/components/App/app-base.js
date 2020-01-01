import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';

import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import { withStyles } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

const styles = theme => ({
  mainContent: {
    marginTop: '5em'
  },
});

class AppBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }
  componentWillUnmount() {
    this.listener();
  }

  render() {
    const { classes } = this.props;

    return (
        <ThemeProvider theme={theme}>
          <Router>
            <div>
              <Navigation />
              <Route exact path={ROUTES.LANDING} component={LandingPage} />
              <Route path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />

              <main>
                <Container maxWidth="sm" className={classes.mainContent}>
                  <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                  <Route path={ROUTES.HOME} component={HomePage} />
                  <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                  <Route path={ROUTES.ADMIN} component={AdminPage} />
                </Container>
              </main>

            </div>
          </Router>
        </ThemeProvider>
    );
  }
};

AppBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBase);