import React from 'react';
import { Helmet } from 'react-helmet';

import { FirstProjectFormContainer } from './_components/FirstProjectForm';

import { FormTemplateView } from '@components/Form/FormTemplate';

const FirstProjectPageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Set up your first project">
      <meta name="description" content="Sign up page" />
    </Helmet>
    <FormTemplateView
      titleLarge="Let’s set up your first project"
      titleSmall="Projects will contain your folders, board and tasks."
    >
      <FirstProjectFormContainer />
    </FormTemplateView>
  </>
);

export default FirstProjectPageView;
