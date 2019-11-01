import React from 'react';
import { Helmet } from 'react-helmet';

import { RestorePasswordFormContainer } from './_components/RestorePasswordForm';

import { FormTemplateView } from '@components/Form/FormTemplate';

const RestorePasswordView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Restore password">
      <meta name="description" content="Sign in page" />
    </Helmet>
    <FormTemplateView
      titleLarge="Restore password"
      titleSmall="Enter the email you used to sign up and we'll send you a link to reset your password."
      addTitleSmallClass="pl-2 pr-2"
      link={<p>
        If you don't receive the email within a few minutes, please please try again.
      </p>}
      addLinkClass="pl-10 pr-10"
    >
      <RestorePasswordFormContainer />
    </FormTemplateView>
  </>
);

export default RestorePasswordView;
