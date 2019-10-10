import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

const LoginPageView = () => (
  <div>
    <Helmet defaultTitle="Squad.io - Login">
      <meta name="description" content="Login page" />
    </Helmet>
    <h1 className="login-page__header p-10 flex">Unprotected Login page</h1>
  </div>
);

export default LoginPageView;
