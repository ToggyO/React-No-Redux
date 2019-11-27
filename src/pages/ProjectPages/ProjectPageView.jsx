import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTES } from '@config';


const ProjectPageView = () => (
  <div className="flex align-items-center flex-column">
    <Helmet defaultTitle="Squad.io - Project">
      <meta name="description" content="Project page" />
    </Helmet>
    <h1>Protected Project Page</h1>
    <Link to={ROUTES.USER.ROOT + ROUTES.USER.TEAM.ROOT + ROUTES.USER.TEAM.INVITE}>To team page</Link>
  </div>
);

export default ProjectPageView;
