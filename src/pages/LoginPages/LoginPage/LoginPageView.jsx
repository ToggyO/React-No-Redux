import React from 'react';
import { Helmet } from 'react-helmet';

import LoginPageViewForm from './_components/LoginPageForm/LoginPageFormView';

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
      <LoginPageViewForm />
    </FormTemplateView>
  </>
);

export default LoginPageView;
