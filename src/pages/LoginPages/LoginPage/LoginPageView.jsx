import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

import { LoginPageFormContainer } from './_components/LoginPageForm';

import { ROUTES } from '@config/routes';
import history from '@services/history';
import { checkTokens } from '@services/auth';
import { FormTemplateView } from '@components/Form/FormTemplate';

const LoginPageView = () => {
  useEffect(() => {
    if (checkTokens()) {
      history.replace(ROUTES.HOME_PAGE)
    }
  },[]);

  return (
    <>
      <Helmet defaultTitle="Squad.io - Sign in">
        <meta name="description" content="login in page" />
      </Helmet>
      <FormTemplateView
        titleLarge="Sign in"
        titleSmall={<p>
          Are you new to squad? Create your account&ensp;
          <NavLink
            className="form_link"
            to={ROUTES.AUTH.ROOT + ROUTES.AUTH.SIGN_UP}
          >
            here.
          </NavLink>
        </p>}
        link={<NavLink
          className="form_link"
          to={ROUTES.AUTH.ROOT + ROUTES.AUTH.RESTORE_PASSWORD}
        >
          I forgot my password
        </NavLink>}
      >
        <LoginPageFormContainer />
      </FormTemplateView>
    </>
  )
};

export default LoginPageView;
