import React from 'react';
import { Helmet } from 'react-helmet';

import { LogoutButton } from '@components/LogoutButton';

const SomePageView = () => (
  <div>
    <Helmet defaultTitle="Squad.io - Some page">
      <meta name="description" content="Some page" />
    </Helmet>
    <h1>Protected Some Page</h1>
    <LogoutButton addButtonClass="btn" />
  </div>
);

export default SomePageView;
