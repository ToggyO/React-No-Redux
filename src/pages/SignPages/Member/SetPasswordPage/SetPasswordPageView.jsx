import React from 'react';
import { Helmet } from 'react-helmet';

import { SetPasswordFormContainer } from './_components/SetPasswordForm';

import { FormTemplateView } from '@components/Form/FormTemplate';

const SetPasswordPageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Choose your password">
      <meta name="description" content="Sign up page"/>
    </Helmet>
    <FormTemplateView
      titleLarge="Set password"
      titleSmall="Password should include min 6 max 30 characters, only digits, latin letters or special characters"
    >
      <SetPasswordFormContainer/>
    </FormTemplateView>
  </>
);

export default SetPasswordPageView;
