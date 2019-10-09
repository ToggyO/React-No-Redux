/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTES } from '@config/constants';
import { checkTokens } from '@services/auth';

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (checkTokens() ? <Component {...props} /> : <Redirect to={ROUTES.LOGIN} />)}
  />
);

export default AuthRoute;
