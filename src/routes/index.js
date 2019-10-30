import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import UnAuthRoute from './UnAuthRoute';

import { ModalContainer } from '@components/Modal';
import { ROUTES } from '@config';
import { AuthScreenWrapperContainer } from '@components/AuthScreenWrapper';
import { HomePageContainer } from '@pages/HomePage';
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

// eslint-disable-next-line react/prop-types
const Routes = ({ modal: { modalKey } }) => (
  <>
    {modalKey ? <ModalContainer /> : null}
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
              <Route
                path={ROUTES.AUTH.ROOT + ROUTES.AUTH.QUICK_TUTORIAL}
                exact
                component={TutorialPageView}
              />
              <Route path={ROUTES.AUTH.ROOT + ROUTES.AUTH.LOGIN_IN} exact component={LoginPageView} />
            </Switch>
          </AuthScreenWrapperContainer>
        )}
      />

      {/* REDIRECTS */}
      <AuthRoute path={ROUTES.HOME_PAGE} exact component={HomePageContainer} />
      {/* /REDIRECTS */}

      {/* NOT FOUND PAGE */}
      <Route path="*" component={NotFoundPageView} />
      {/* /NOT FOUND PAGE */}
    </Switch>
  </>
);

const mapStateToProps = ({ modal }) => ({ modal });

export default connect(
  mapStateToProps,
  null
)(Routes);
