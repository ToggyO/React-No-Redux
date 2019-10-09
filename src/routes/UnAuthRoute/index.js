/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { ROUTES } from '@config/constants';
import { checkTokens } from '@services/auth';
import { authSelectors } from '@ducks/auth';

const isTokensValid = checkTokens();

const UnAuthRoute = ({ isEmailConfirmed, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (!isTokensValid ? <Component {...props} /> : <Redirect to={ROUTES.HOME} />)}
  />
);

function mapStateToProps(state) {
  return {
    isEmailConfirmed: authSelectors.emailConfirmedSelector(state),
  };
}
export default connect(mapStateToProps)(UnAuthRoute);
