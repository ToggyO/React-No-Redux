import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import UnAuthRoute from './UnAuthRoute';

import { ROUTES } from '@config';
import { HomePageView } from '@pages/HomePage';
import { LoginPageView } from '@pages/LoginPage';
import { NotFoundPageView } from '@pages/NotFoundPage';

const Routes = () => (
  <Switch>
    <AuthRoute path={ROUTES.HOME_PAGE} exact component={HomePageView} />

    <UnAuthRoute path={ROUTES.LOGIN_PAGE} exact component={LoginPageView} />

    {/* NOT FOUND PAGE */}
    <Route path="*" component={NotFoundPageView} />
    {/* /NOT FOUND PAGE */}
  </Switch>
);

export default Routes;
