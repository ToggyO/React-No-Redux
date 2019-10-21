import React from 'react';
import { Helmet } from 'react-helmet';

import { SetTeamFormView } from './_components/SetTeamForm';

import { FormTemplateView } from '@components/Form/FormTemplate';

const SetTeamPageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Set a team">
      <meta name="description" content="Set up a team with your colleagues" />
    </Helmet>
    <FormTemplateView
      titleLarge="Set up a team with your colleagues"
      titleSmall="Invite as many as you like, or continue by yourself."
    >
      <SetTeamFormView />
    </FormTemplateView>
  </>
);

export default SetTeamPageView;
