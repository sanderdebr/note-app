import React from 'react';
import { withFirebase } from '../Firebase';

import AppBase from './app-base';

const App = () => (
  <div>
    <AppWithFirebase />
  </div>
);

const AppWithFirebase = withFirebase(AppBase);

export default App;