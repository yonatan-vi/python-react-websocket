import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Entrance from './pages/Entrance';
import About from './pages/About';

const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Entrance} />
      <Route exact path="/about" component={About} />
    </Switch>
  </React.Fragment>
);

export default connect()(App);
