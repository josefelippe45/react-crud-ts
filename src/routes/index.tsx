import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from 'pages/Landing';
import Register from 'pages/Register';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default Routes;
