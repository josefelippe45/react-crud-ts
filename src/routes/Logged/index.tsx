import Cookies from 'js-cookie';
import React, { FC } from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';

interface ILogged extends RouteProps {}

const Logged: FC<ILogged> = ({ ...rest }) => {
  const navigate = useHistory();
  if (!Cookies.get('auth-token')) {
    navigate.push('/');
    return null;
  }
  return <Route {...rest} />;
};

export default Logged;
