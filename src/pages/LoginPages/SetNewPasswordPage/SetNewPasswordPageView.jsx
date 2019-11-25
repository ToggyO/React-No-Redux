import React from 'react';
import { Helmet } from 'react-helmet';

import { SetNewPasswordFormContainer } from './_components/SetPasswordForm';

import { FormTemplateView } from '@components/Form/FormTemplate';

const SetNewPasswordPageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Choose your password">
      <meta name="description" content="Sign in page"/>
    </Helmet>
    <FormTemplateView
      titleLarge="Set password"
      titleSmall="Password should include min 6 max 30 characters, only digits, latin letters or special characters"
    >
      <SetNewPasswordFormContainer/>
    </FormTemplateView>
  </>
);

export default SetNewPasswordPageView;
