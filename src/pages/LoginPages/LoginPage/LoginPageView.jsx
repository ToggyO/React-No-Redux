import React from 'react';
import { Helmet } from 'react-helmet';

import { LoginPageFormContainer } from './_components/LoginPageForm';

import { FormTemplateView } from '@components/Form/FormTemplate';

const LoginPageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Login in">
      <meta name="description" content="login in page" />
    </Helmet>
    <FormTemplateView
      titleLarge="Sign in"
      titleSmall="Are you new to squad? Create your account here"
    >
      <LoginPageFormContainer />
    </FormTemplateView>
  </>
);

export default LoginPageView;
