import React from 'react';
import { Helmet } from 'react-helmet';

import { TutorialPageFormView } from './_components/TutorialPageForm';

const TutorialPageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Quick tutorial">
      <meta name="description" content="Sign up page" />
    </Helmet>
    <TutorialPageFormView />
  </>
);

export default TutorialPageView;
