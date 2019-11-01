/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { redirectToStep } from '@utils/index';
import { authSelectors } from '@ducks/auth';
import { checkTokens } from '@services/auth';

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

const AuthRoute = ({ component: Component, registrationStep, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      // debugger;
      if (checkTokens() && (registrationStep && registrationStep === 8)) {
        // debugger;
        return <Component {...props} />;
      }
      // debugger;
      return <Redirect to={redirectToStep(registrationStep)} />;
    }}
  />
);

const mapStateToProps = state => ({
  registrationStep: authSelectors.registerStepSelector(state),
});

export default connect(
  mapStateToProps,
  null
)(AuthRoute);
