import React from 'react';
import { Helmet } from 'react-helmet';

import PasswordEnterFormView from './_components/PasswordEnterForm/PasswordEnterFormView';

import { FormTemplateView } from '@components/Form/FormTemplate';

const PasswordEnterPageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Choose your password">
      <meta name="description" content="Sign up page" />
    </Helmet>
    <FormTemplateView
      titleLarge="Choose your password"
      titleSmall="You’ll use this to log into your Squad account."
    >
      <PasswordEnterFormView />
    </FormTemplateView>
  </>
);

export default PasswordEnterPageView;
