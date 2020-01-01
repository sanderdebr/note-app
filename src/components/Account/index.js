import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import ForgotPassword from '../PasswordForget';
const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <ForgotPassword />
      </div>
    )}
  </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);