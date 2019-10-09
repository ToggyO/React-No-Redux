import React from 'react';
import { Helmet } from 'react-helmet';

const HomePageView = () => (
  <div>
    <Helmet defaultTitle="Squad.io - Home">
      <meta name="description" content="Home page" />
    </Helmet>
    <h1>Protected Home Page</h1>
  </div>
);

export default HomePageView;
