import React from 'react';
import { Helmet } from 'react-helmet';

import { userLogout } from '@services/auth';

const HomePageView = ({ modalOpen }) => (
  <div>
    <Helmet defaultTitle="Squad.io - Home">
      <meta name="description" content="Home page" />
    </Helmet>
    <h1>Protected Home Page</h1>
    <button type="button" onClick={userLogout}>Log Out</button>
    <button type="button" onClick={() => modalOpen('Handler500')}>Open modal</button>
  </div>
);

export default HomePageView;
