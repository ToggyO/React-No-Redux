import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTES } from '@config';


const TeamPageView = () => (
  <div className="flex align-items-center flex-column">
    <Helmet defaultTitle="Squad.io - Team">
      <meta name="description" content="Team page" />
    </Helmet>
    <h1>Protected Team Page</h1>
    <Link to={ROUTES.PROJECT.ROOT}>To project page</Link>
  </div>
);

export default TeamPageView;
