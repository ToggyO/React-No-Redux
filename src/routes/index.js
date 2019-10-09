/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import UnAuthRoute from './UnAuthRoute';

const Routes = () => (
  <Switch>
    <Route path={ROUTES.HOME} exact component={HomePageDisplay} />

    <UnAuthRoute path={ROUTES.LOGIN} exact component={LoginContainer} />

    <AuthRoute path={ROUTES.SETTINGS.ROOT} exact component={SettingsContainer} />
    <AuthRoute path={ROUTES.SETTINGS.EDIT_EMAIL} exact component={EditEmailDisplay} />
    <AuthRoute path={ROUTES.SETTINGS.EDIT_FULLNAME} exact component={EditFullNameDisplay} />
    <AuthRoute path={ROUTES.SETTINGS.EDIT_PHONENUMBER} exact component={EditPhoneNumberDisplay} />

    {/* NOT FOUND PAGE */}
    <Route path="*" component={NotFound} />
    {/* /NOT FOUND PAGE */}
  </Switch>
);

export default Routes;
