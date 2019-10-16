import React from 'react';
import { Helmet } from 'react-helmet';

import { SetTeamFormView } from './_components/SetTeamForm';

const SetTeamPageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Set a team">
      <meta name="description" content="Set up a team with your colleagues" />
    </Helmet>
    <SetTeamFormView />
  </>
);

export default SetTeamPageView;
