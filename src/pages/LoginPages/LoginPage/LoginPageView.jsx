import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

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
      <Helmet defaultTitle="Squad.io - Login in">
        <meta name="description" content="login in page" />
      </Helmet>
      <FormTemplateView
        titleLarge="Sign in"
        titleSmall="Are you new to squad? Create your account here"
        link={<a className="form_link" href="#">I forgot my password</a>}
      >
        <LoginPageFormContainer />
      </FormTemplateView>
    </>
  )
};

export default LoginPageView;
