/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

import { ROUTES } from '@config';
import { parseQueryString } from '@utils/index';
import { checkTokens } from '@services/auth';

const InviteRoute = ({ component: Component, ...rest }) => {
  const queries = parseQueryString(rest.location.search);

  return (
    <Route
      {...rest}
      render={props => {
        // debugger;
        if (checkTokens()) {
          // debugger;
          return <Component queries={queries} {...props} />;
        }
        if (queries.isRegistered !== 'false') {
          // debugger;
          return <Redirect to={ROUTES.AUTH.ROOT + ROUTES.AUTH.LOGIN_IN} />;
        }
        // debugger;
        return <Redirect to={ROUTES.AUTH.ROOT + ROUTES.AUTH.SET_PASSWORD_INVITE + rest.location.search} />;
      }}
    />
  );
};

export default withRouter(InviteRoute);
