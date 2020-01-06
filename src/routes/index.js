import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import UnAuthRoute from './UnAuthRoute';

import { ROUTES } from '@config';
import { AuthScreenWrapperContainer } from '@components/AuthScreenWrapper';
import { HomePageContainer } from '@pages/HomePage';
import { NotFoundPageView } from '@pages/NotFoundPage';
import { SignUpPageContainer } from '@pages/SignPages/Admin/SignUpPage';
import { ConfirmEmailPageContainer } from '@pages/SignPages/Admin/ConfirmEmailPage';
import { SetNewPasswordPageView } from '@pages/LoginPages/SetNewPasswordPage';
import { EnterNamePageView } from '@pages/SignPages/Admin/EnterNamePage';
import { SetCompanyNamePageView } from '@pages/SignPages/Admin/SetCompanyNamePage';
import { FirstProjectPageView } from '@pages/SignPages/Admin/FirstProjectPage';
import { TutorialPageView } from '@pages/SignPages/Admin/TutorialPage';
import { SetTeamPageView } from '@pages/SignPages/Admin/SetTeamPage';
import { LoginPageView } from '@pages/LoginPages/LoginPage';
import { RestorePasswordContainer } from '@pages/LoginPages/RestorePassword';
import { SetPasswordPageView } from '@pages/SignPages/Member/SetPasswordPage';
import { TeamPageView } from '@pages/TeamPages';
import { ProjectPageView } from '@pages/ProjectPages';
import MainWrapper from '@components/MainWrapper';

// eslint-disable-next-line react/prop-types
const Routes = () => (
  <>
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
                component={ConfirmEmailPageContainer}
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
              <Route
                path={ROUTES.AUTH.ROOT + ROUTES.AUTH.RESTORE_PASSWORD}
                exact
                component={RestorePasswordContainer}
              />
              <Route
                path={ROUTES.AUTH.ROOT + ROUTES.AUTH.SET_PASSWORD}
                exact
                component={SetNewPasswordPageView}
              />
              <Route
                path={ROUTES.AUTH.ROOT + ROUTES.AUTH.SET_PASSWORD_INVITE}
                exact
                component={SetPasswordPageView}
              />
            </Switch>
          </AuthScreenWrapperContainer>
        )}
      />

      {/* AuthRoute */}
      {/* <AuthRoute */}
      {/*  path={ROUTES.USER.ROOT} */}
      {/*  component={props => ( */}
      {/*    <UserSettingsPageView {...props}> */}
      {/*      <Switch> */}
      {/*        <Route */}
      {/*          path={`${ROUTES.USER.ROOT}/:userId${ROUTES.USER.PROFILE}`} */}
      {/*          exact */}
      {/*          component={UserProfileView} */}
      {/*        /> */}
      {/*      </Switch> */}
      {/*    </UserSettingsPageView> */}
      {/*  )} */}
      {/* /> */}
      <AuthRoute path={ROUTES.TEAM.ROOT} component={TeamPageView} />
      <AuthRoute path={ROUTES.PROJECT.ROOT} component={ProjectPageView} />
      <AuthRoute
        path={ROUTES.ROOT}
        component={() => (
          <MainWrapper>
            <Switch>
              <Redirect exact from={ROUTES.ROOT} to={ROUTES.HOME_PAGE} />
              <Route path={ROUTES.HOME_PAGE} exact component={HomePageContainer} />
            </Switch>
          </MainWrapper>
        )}
      />
      {/* <AuthRoute */}
      {/*  path={ROUTES.ROOT} */}
      {/*  component={props => ( */}
      {/*    <SidebarWrapperContainer {...props}> */}
      {/*      <Switch> */}
      {/*        <Redirect exact from={ROUTES.ROOT} to={ROUTES.HOME_PAGE} /> */}
      {/*        <Route path={ROUTES.HOME_PAGE} exact component={HomePageContainer} /> */}
      {/*      </Switch> */}
      {/*    </SidebarWrapperContainer> */}
      {/*  )} */}
      {/* /> */}

      {/* REDIRECTS */}
      {/* /REDIRECTS */}

      {/* NOT FOUND PAGE */}
      <Route path="*" component={NotFoundPageView} />
      {/* /NOT FOUND PAGE */}
    </Switch>
  </>
);

// const mapStateToProps = state => ({
//   uiTheme: userSelectors.uiThemeSelector(state),
// });

// export default connect(
//
// )(Routes);
export default Routes;
