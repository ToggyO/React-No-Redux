import React from 'react';
import { Helmet } from 'react-helmet';
// import PT from 'prop-types';

import { SignUpFormContainer } from './_components/SignUpForm';

import { FormTemplateView } from '@components/Form/FormTemplate';

const SignUpPageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Creat account">
      <meta name="description" content="Sign up page" />
    </Helmet>
    <FormTemplateView
      titleLarge="Create your account"
      titleSmall="Sign up with your work email or your Google Account."
      link={<p>
        Already have a Squad account?&nbsp;
        <a className="form_link" href="#">Log in here.</a>
      </p>}
    >
      <SignUpFormContainer />
    </FormTemplateView>
  </>
);

export default SignUpPageView;
