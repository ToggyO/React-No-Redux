import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { SignUpFormContainer } from './_components/SignUpForm';

import { ROUTES } from '@config/routes';

import { FormTemplateView } from '@components/Form/FormTemplate';

const SignUpPageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Create account">
      <meta name="description" content="Sign up page" />
    </Helmet>
    <FormTemplateView
      titleLarge="Create your account"
      titleSmall="Sign up with your work email or your Google Account."
      link={<p>
        Already have a Squad account?&nbsp;
        <Link className="form_link" to={ROUTES.AUTH.ROOT + ROUTES.AUTH.LOGIN_IN}>Log in here.</Link>
      </p>}
    >
      <SignUpFormContainer />
    </FormTemplateView>
  </>
);

export default SignUpPageView;
