import React from 'react';
import { Helmet } from 'react-helmet';

import { LogoutButton } from '@components/LogoutButton';


const HomePageView = () => (
  <div>
    <Helmet defaultTitle="Squad.io - Home">
      <meta name="description" content="Home page" />
    </Helmet>
    <h1>Protected Home Page</h1>
    <LogoutButton addButtonClass="btn form_link" />
    {/* <button type="button" onClick={() => modalOpen('Handler500')}>Open modal</button> */}
  </div>
);

export default HomePageView;
