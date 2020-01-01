import React from 'react';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';

import SignInFormBase from './signin-formbase';

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;

export { SignInForm };