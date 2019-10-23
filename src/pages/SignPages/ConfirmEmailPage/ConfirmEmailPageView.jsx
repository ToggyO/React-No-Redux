import React from 'react';
import { Helmet } from 'react-helmet';

// import { ConfirmEmailFormView } from './_components/ConfirmEmailForm';

import { ConfirmEmailFormContainer } from './_components/ConfirmEmailForm';

import { FormTemplateView } from '@components/Form/FormTemplate';

const ConfirmEmailPageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Confirm email">
      <meta name="description" content="Confirm email page" />
    </Helmet>
    <FormTemplateView
      titleLarge="Confirm your email"
      titleSmall="We have sent a confirmation code to name@company.com. Enter this code below:"
      link="Didn’t receive a confirmation code? Click here"
    >
      <ConfirmEmailFormContainer />
    </FormTemplateView>
  </>
);

export default ConfirmEmailPageView;
