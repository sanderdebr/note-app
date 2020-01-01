import React from 'react';
import { withFirebase } from '../Firebase';
import { withAuthentication } from '../Session';

import AppBase from './app-base';

const App = () => (
  <div>
    <AppWithFirebase />
  </div>
);

const AppWithFirebase = withAuthentication(withFirebase(AppBase));

export default App;