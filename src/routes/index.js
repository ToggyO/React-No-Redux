import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import UnAuthRoute from './UnAuthRoute';

import { ROUTES } from '@config';
import { AuthScreenWrapper } from '@components/AuthScreenWrapper';
import { HomePageView } from '@pages/HomePage';
import { NotFoundPageView } from '@pages/NotFoundPage';
import { SignUpPageView } from '@pages/SignPages/SignUpPage';
import { ConfirmEmailPageView } from '@pages/SignPages/ConfirmEmailPage';
import { PasswordEnterPageView } from '@pages/SignPages/PasswordEnterPage';
import { EnterNamePageView } from '@pages/SignPages/EnterNamePage';
import { SetCompanyNamePageView } from '@pages/SignPages/SetCompanyNamePage';
import { FirstProjectPageView } from '@pages/SignPages/FirstProjectPage';


const Routes = () => (
  <Switch>
    <UnAuthRoute
      path={ROUTES.AUTH.ROOT}
      component={props => (
        <AuthScreenWrapper {...props}>
          <Switch>
            <Route path={ROUTES.AUTH.ROOT + ROUTES.AUTH.SIGN_UP} exact component={SignUpPageView} />
            <Route
              path={ROUTES.AUTH.ROOT + ROUTES.AUTH.CONFIRM_EMAIL}
              exact
              component={ConfirmEmailPageView}
            />
            <Route
              path={ROUTES.AUTH.ROOT + ROUTES.AUTH.ENTER_PASSWORD}
              exact
              component={PasswordEnterPageView}
            />
            <Route path={ROUTES.AUTH.ROOT + ROUTES.AUTH.ENTER_NAME} exact component={EnterNamePageView} />
            <Route
              path={ROUTES.AUTH.ROOT + ROUTES.AUTH.SET_COMPANY_NAME}
              exact
              component={SetCompanyNamePageView}
            />
            <Route
              path={ROUTES.AUTH.ROOT + ROUTES.AUTH.SET_FIRST_PROJECT}
              exact
              component={FirstProjectPageView}
            />
          </Switch>
        </AuthScreenWrapper>
      )}
    />

    <AuthRoute path={ROUTES.HOME_PAGE} exact component={HomePageView} />

    {/* REDIRECTS */}
    <UnAuthRoute
      path={ROUTES.AUTH.SIGN_UP}
      exact
      component={() => <Redirect to={ROUTES.AUTH.ROOT + ROUTES.AUTH.SIGN_UP} />}
    />
    <UnAuthRoute
      path={ROUTES.AUTH.CONFIRM_EMAIL}
      exact
      component={() => <Redirect to={ROUTES.AUTH.ROOT + ROUTES.AUTH.CONFIRM_EMAIL} />}
    />
    {/* /REDIRECTS */}

    {/* NOT FOUND PAGE */}
    <Route path="*" component={NotFoundPageView} />
    {/* /NOT FOUND PAGE */}
  </Switch>
);

export default Routes;
