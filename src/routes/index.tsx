import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from 'pages/Landing';
import Register from 'pages/Register';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
