import React from 'react';
import { Helmet } from 'react-helmet';

import { EnterNameFormView } from './_components/EnterNameForm';

const EnterNamePageView = () => (
  <>
    <Helmet defaultTitle="Squad.io - Welcome to Squad!">
      <meta name="description" content="Sign up page" />
    </Helmet>
    <EnterNameFormView />
  </>
);

export default EnterNamePageView;
