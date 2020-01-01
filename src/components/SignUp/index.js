import React from 'react';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';

import SignUpFormBase from './signup-formbase';

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm };