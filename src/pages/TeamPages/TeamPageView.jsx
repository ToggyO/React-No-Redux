import React from 'react';
import { Helmet } from 'react-helmet';


const TeamPageView = () => (
  <div className="flex align-items-center flex-column">
    <Helmet defaultTitle="Squad.io - Home">
      <meta name="description" content="Home page" />
    </Helmet>
    <h1>Protected Team Page</h1>
  </div>
);

export default TeamPageView;
