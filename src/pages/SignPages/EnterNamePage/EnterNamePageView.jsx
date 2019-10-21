import React from 'react';
import { Helmet } from 'react-helmet';

import { EnterNameFormView } from './_components/EnterNameForm';

import { FormTemplateView } from '@components/Form/FormTemplate';

const EnterNamePageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Welcome to Squad!">
      <meta name="description" content="Sign up page" />
    </Helmet>
    <FormTemplateView
      titleLarge="Welcome to Squad!"
      titleSmall="Thanks for signing up, please tell us your name."
    >
      <EnterNameFormView />
    </FormTemplateView>
  </>
);

export default EnterNamePageView;
