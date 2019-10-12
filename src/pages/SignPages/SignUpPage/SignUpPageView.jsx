import React from 'react';
import { Helmet } from 'react-helmet';

import { SignUpFormView } from './_components/SignUpForm';

const SignUpPageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Creat account">
      <meta name="description" content="Sign up page" />
    </Helmet>
    <SignUpFormView />
  </>
);

export default SignUpPageView;
