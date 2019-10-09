import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPageView = () => (
  <div>
    <Helmet defaultTitle="Squad.io - 404">
      <meta name="description" content="404" />
    </Helmet>
    <h1>Not found page</h1>
  </div>
);

export default NotFoundPageView;
