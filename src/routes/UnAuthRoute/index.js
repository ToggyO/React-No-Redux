/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { checkTokens } from '@services/auth';
import { ROUTES } from '@config';

const UnAuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (!checkTokens() ? <Component {...props} /> : <Redirect to={ROUTES.HOME_PAGE} />)}
  />
);

export default UnAuthRoute;
