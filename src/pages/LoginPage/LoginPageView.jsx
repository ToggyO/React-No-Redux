import React from 'react';
import { Helmet } from 'react-helmet';

const LoginPageView = () => (
  <div>
    <Helmet defaultTitle="Squad.io - Login">
      <meta name="description" content="Login page" />
    </Helmet>
    <h1>Unprotected Login page</h1>
  </div>
);

export default LoginPageView;
