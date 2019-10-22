import React from 'react';
import { Helmet } from 'react-helmet';

import { userLogout } from '@services/auth';

const HomePageView = () => (
  <div>
    <Helmet defaultTitle="Squad.io - Home">
      <meta name="description" content="Home page" />
    </Helmet>
    <h1>Protected Home Page</h1>
    <button type="button" onClick={userLogout}>Log Out</button>
  </div>
);

export default HomePageView;
