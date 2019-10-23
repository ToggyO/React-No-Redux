/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { authSelectors } from '@ducks/auth';

import { checkTokens } from '@services/auth';
import { ROUTES } from '@config';

const UnAuthRoute = ({ component: Component, registerStep, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !checkTokens() || registerStep < 8 ? <Component {...props} /> : <Redirect to={ROUTES.HOME_PAGE} />
    }
  />
);

const mapStateToProps = state => ({
  registerStep: authSelectors.registerStepSelector(state),
});

export default connect(
  mapStateToProps,
  null
)(UnAuthRoute);
