import React from 'react';
import { Helmet } from 'react-helmet';

import { TutorialPageFormContainer } from './_components/TutorialPageForm';

import { FormTemplateView } from '@components/Form/FormTemplate';

const TutorialPageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Quick tutorial">
      <meta name="description" content="Sign up page" />
    </Helmet>
    <FormTemplateView
      titleLarge="Great! Here’s a quick tutorial"
      titleSmall="This short video will help you get started."
    >
      <TutorialPageFormContainer />
    </FormTemplateView>
  </>
);

export default TutorialPageView;
