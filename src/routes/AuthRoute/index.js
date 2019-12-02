/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import { compose } from 'redux';

import { parseQueryString, redirectToStep } from '@utils/index';
import { authSelectors } from '@ducks/auth';
import { checkTokens } from '@services/auth';
import { ROUTES } from '@config/routes';

// const AuthRoute = ({ component: Component, registrationStep, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       checkTokens() && (registrationStep && registrationStep === 8) ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={redirectToStep(registrationStep)} />
//       )
//     }
//   />
// );

const AuthRoute = ({ component: Component, registrationStep, ...rest }) => {
  const queries = parseQueryString(rest.location.search);

  return (
    <Route
      {...rest}
      render={props => {
        // debugger;
        if (checkTokens() && (registrationStep && registrationStep === 8)) {
          // debugger;
          return <Component {...props} />;
        }
        if (queries && queries.isRegistered === 'true') {
          // debugger;
          return <Redirect to={ROUTES.AUTH.ROOT + ROUTES.AUTH.LOGIN_IN} />;
        }
        if (queries && queries.isRegistered === 'false') {
          // debugger;
          return <Redirect to={ROUTES.AUTH.ROOT + ROUTES.AUTH.SET_PASSWORD_INVITE + rest.location.search} />;
        }
        // debugger;
        return <Redirect to={redirectToStep(registrationStep)} />;
      }}
    />
  );
};

const mapStateToProps = state => ({
  registrationStep: authSelectors.registerStepSelector(state),
});

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  withRouter
)(AuthRoute);
