import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import UnAuthRoute from './UnAuthRoute';

import { ROUTES } from '@config';
import { AuthScreenWrapperContainer } from '@components/AuthScreenWrapper';
import { HomePageView } from '@pages/HomePage';
import { NotFoundPageView } from '@pages/NotFoundPage';
import { SignUpPageContainer } from '@pages/SignPages/SignUpPage';
import { ConfirmEmailPageView } from '@pages/SignPages/ConfirmEmailPage';
import { PasswordEnterPageView } from '@pages/SignPages/PasswordEnterPage';
import { EnterNamePageView } from '@pages/SignPages/EnterNamePage';
import { SetCompanyNamePageView } from '@pages/SignPages/SetCompanyNamePage';
import { FirstProjectPageView } from '@pages/SignPages/FirstProjectPage';
import { TutorialPageView } from '@pages/SignPages/TutorialPage';
import { SetTeamPageView } from '@pages/SignPages/SetTeamPage';
import { LoginPageView } from '@pages/LoginPages/LoginPage';

const Routes = () => (
  <Switch>
    {/* UnAuthRoute */}
    <UnAuthRoute
      path={ROUTES.AUTH.ROOT}
      component={props => (
        <AuthScreenWrapperContainer {...props}>
          <Switch>
            <Route path={ROUTES.AUTH.ROOT + ROUTES.AUTH.SIGN_UP} exact component={SignUpPageContainer} />
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
            <Route path={ROUTES.AUTH.ROOT + ROUTES.AUTH.SET_TEAM} exact component={SetTeamPageView} />
            <Route
              path={ROUTES.AUTH.ROOT + ROUTES.AUTH.SET_FIRST_PROJECT}
              exact
              component={FirstProjectPageView}
            />
            <Route path={ROUTES.AUTH.ROOT + ROUTES.AUTH.QUICK_TUTORIAL} exact component={TutorialPageView} />
            <Route path={ROUTES.AUTH.ROOT + ROUTES.AUTH.LOGIN_IN} exact component={LoginPageView} />
          </Switch>
        </AuthScreenWrapperContainer>
      )}
    />

    <AuthRoute path={ROUTES.HOME_PAGE} exact component={HomePageView} />

    {/* REDIRECTS */}
    {/* <UnAuthRoute */}
    {/*  path={ROUTES.AUTH.ROOT + ROUTES.AUTH.SIGN_UP} */}
    {/*  exact */}
    {/*  component={() => <Redirect to={ROUTES.AUTH.ROOT + ROUTES.AUTH.SIGN_UP} />} */}
    {/* /> */}
    {/* <UnAuthRoute */}
    {/*  path={ROUTES.AUTH.ROOT + ROUTES.AUTH.LOGIN_IN} */}
    {/*  exact */}
    {/*  component={() => <Redirect to={ROUTES.AUTH.ROOT + ROUTES.AUTH.LOGIN_IN} />} */}
    {/* /> */}
    {/* <UnAuthRoute */}
    {/*  path={ROUTES.AUTH.ROOT + ROUTES.AUTH.CONFIRM_EMAIL} */}
    {/*  exact */}
    {/*  component={() => <Redirect to={ROUTES.AUTH.ROOT + ROUTES.AUTH.CONFIRM_EMAIL} />} */}
    {/* /> */}
    {/* /REDIRECTS */}

    {/* NOT FOUND PAGE */}
    <Route path="*" component={NotFoundPageView} />
    {/* /NOT FOUND PAGE */}
  </Switch>
);

export default Routes;
