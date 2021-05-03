import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from 'pages/Landing';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Home from 'pages/Home';
import Logged from './Logged';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Logged path="/home" component={Home} />
    </Switch>
  );
};

export default Routes;
