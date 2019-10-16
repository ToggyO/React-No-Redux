import React from 'react';
import { Helmet } from 'react-helmet';

import { FirstProjectFormView } from './_components/FirstProjectForm';

const FirstProjectPageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Set up your first project">
      <meta name="description" content="Sign up page" />
    </Helmet>
    <FirstProjectFormView />
  </>
);

export default FirstProjectPageView;
