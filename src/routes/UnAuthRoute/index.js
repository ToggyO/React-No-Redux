/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { authSelectors } from '@ducks/auth';

import { checkTokens } from '@services/auth';
import { ROUTES } from '@config';

// const UnAuthRoute = ({ component: Component, registrationStep, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       !checkTokens() || (registrationStep && registrationStep < 8) ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={ROUTES.HOME_PAGE} />
//       )
//     }
//   />
// );

const UnAuthRoute = ({ component: Component, registrationStep, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!checkTokens() || (registrationStep && registrationStep < 8)) {
        // debugger;
        return <Component {...props} />;
      }
      // debugger;
      return <Redirect to={ROUTES.HOME_PAGE} />;
    }}
  />
);

const mapStateToProps = state => ({
  registrationStep: authSelectors.registerStepSelector(state),
});

export default connect(
  mapStateToProps,
  null
)(UnAuthRoute);
